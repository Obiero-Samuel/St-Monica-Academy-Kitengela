
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const rateLimit = require('express-rate-limit');

// Enforce strong JWT secret
if (!process.env.JWT_SECRET || process.env.JWT_SECRET.length < 32) {
    throw new Error('JWT_SECRET must be set to a strong value (32+ chars) in environment variables.');
}
const JWT_SECRET = process.env.JWT_SECRET;

// Rate limiter for auth endpoints
exports.authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // limit each IP to 10 requests per windowMs
    message: { error: 'Too many attempts, try again later.' }
});

exports.register = async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) return res.status(400).json({ error: 'All fields required.' });
    try {
        const existing = await User.findByEmail(email);
        if (existing) return res.status(409).json({ error: 'Email already in use.' });
        const hash = await bcrypt.hash(password, 10);
        const user = await User.create({ username, email, password_hash: hash });
        res.status(201).json({ id: user.id, username: user.username, email: user.email });
    } catch (err) {
        res.status(500).json({ error: 'Registration failed.' });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'All fields required.' });
    try {
        const user = await User.findByEmail(email);
        if (!user) return res.status(401).json({ error: 'Invalid credentials.' });
        const match = await bcrypt.compare(password, user.password_hash);
        if (!match) return res.status(401).json({ error: 'Invalid credentials.' });
        const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '2h' });
        res.json({ token, user: { id: user.id, username: user.username, email: user.email } });
    } catch (err) {
        res.status(500).json({ error: 'Login failed.' });
    }
};

exports.authMiddleware = (req, res, next) => {
    const auth = req.headers.authorization;
    if (!auth || !auth.startsWith('Bearer ')) return res.status(401).json({ error: 'No token.' });
    const token = auth.split(' ')[1];
    try {
        req.user = jwt.verify(token, JWT_SECRET);
        next();
    } catch {
        res.status(401).json({ error: 'Invalid token.' });
    }
};
