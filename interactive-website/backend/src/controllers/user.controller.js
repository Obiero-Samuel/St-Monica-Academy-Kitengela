const User = require('../models/User');
const { authMiddleware } = require('./auth.controller');

exports.getProfile = [authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) return res.status(404).json({ error: 'User not found.' });
        // Only return safe fields
        res.json({ id: user.id, username: user.username, email: user.email, avatar_url: user.avatar_url, preferences: user.preferences });
    } catch {
        res.status(500).json({ error: 'Failed to fetch user.' });
    }
}];

// Restrict user listing to admin only (by email match)
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@yourdomain.com';
exports.listUsers = [authMiddleware, async (req, res) => {
    try {
        if (req.user.email !== ADMIN_EMAIL) return res.status(403).json({ error: 'Forbidden' });
        const result = await User.pool.query('SELECT id, username, email, avatar_url FROM users');
        res.json(result.rows);
    } catch {
        res.status(500).json({ error: 'Failed to list users.' });
    }
}];
