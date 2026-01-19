const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Parent = require('../../models/Parent');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');

const JWT_SECRET = process.env.JWT_SECRET;
const OTP_EXPIRY_MINUTES = 10;

// Rate limiter for parent auth endpoints
exports.parentAuthLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: { error: 'Too many attempts, try again later.' }
});

function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

async function sendOtpEmail(email, otp) {
    // Configure your SMTP transport here
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });
    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Your OTP Code',
        text: `Your OTP code is: ${otp}`
    });
}

exports.register = async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) return res.status(400).json({ error: 'All fields required.' });
    try {
        const existing = await Parent.findOne({ where: { email } });
        if (existing) return res.status(409).json({ error: 'Email already in use.' });
        const hash = await bcrypt.hash(password, 10);
        const otp = generateOTP();
        const otpExpires = new Date(Date.now() + OTP_EXPIRY_MINUTES * 60000);
        const parent = await Parent.create({ name, email, password: hash, otp, otpExpires, isVerified: false });
        await sendOtpEmail(email, otp);
        res.status(201).json({ message: 'Registration successful. OTP sent to email.' });
    } catch (err) {
        res.status(500).json({ error: 'Registration failed.' });
    }
};

exports.verifyOtp = async (req, res) => {
    const { email, otp } = req.body;
    if (!email || !otp) return res.status(400).json({ error: 'All fields required.' });
    try {
        const parent = await Parent.findOne({ where: { email } });
        if (!parent) return res.status(404).json({ error: 'Parent not found.' });
        if (parent.isVerified) return res.status(400).json({ error: 'Already verified.' });
        if (parent.otp !== otp || new Date() > parent.otpExpires) {
            return res.status(400).json({ error: 'Invalid or expired OTP.' });
        }
        parent.isVerified = true;
        parent.otp = null;
        parent.otpExpires = null;
        await parent.save();
        res.json({ message: 'OTP verified. You can now log in.' });
    } catch (err) {
        res.status(500).json({ error: 'OTP verification failed.' });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'All fields required.' });
    try {
        const parent = await Parent.findOne({ where: { email } });
        if (!parent) return res.status(401).json({ error: 'Invalid credentials.' });
        if (!parent.isVerified) return res.status(403).json({ error: 'Email not verified.' });
        const match = await bcrypt.compare(password, parent.password);
        if (!match) return res.status(401).json({ error: 'Invalid credentials.' });
        const token = jwt.sign({ id: parent.id, email: parent.email, role: 'parent' }, JWT_SECRET, { expiresIn: '1d' });
        res.json({ token, parent: { id: parent.id, name: parent.name, email: parent.email } });
    } catch (err) {
        res.status(500).json({ error: 'Login failed.' });
    }
};

exports.getProfile = async (req, res) => {
    // Assume authentication middleware sets req.parent
    if (!req.parent) return res.status(401).json({ error: 'Unauthorized.' });
    res.json({ id: req.parent.id, name: req.parent.name, email: req.parent.email });
};
