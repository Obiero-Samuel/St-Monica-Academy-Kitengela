const Content = require('../models/Content');
const { authMiddleware } = require('./auth.controller');

exports.createContent = [authMiddleware, async (req, res) => {
    const { title, content_type, data } = req.body;
    if (!title || !data) return res.status(400).json({ error: 'Title and data required.' });
    try {
        const content = await Content.create({ title, content_type, data, created_by: req.user.id });
        res.status(201).json(content);
    } catch {
        res.status(500).json({ error: 'Failed to create content.' });
    }
}];

exports.listContent = async (req, res) => {
    try {
        const items = await Content.list({ limit: 20 });
        res.json(items);
    } catch {
        res.status(500).json({ error: 'Failed to list content.' });
    }
};

exports.getContent = async (req, res) => {
    try {
        const item = await Content.findById(req.params.id);
        if (!item) return res.status(404).json({ error: 'Not found.' });
        res.json(item);
    } catch {
        res.status(500).json({ error: 'Failed to fetch content.' });
    }
};
