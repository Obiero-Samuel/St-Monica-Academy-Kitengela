const db = require('../config/database');

const Content = {
    async create({ title, content_type, data, created_by }) {
        const res = await db.query(
            'INSERT INTO content (title, content_type, data, created_by) VALUES ($1, $2, $3, $4) RETURNING *',
            [title, content_type, JSON.stringify(data), created_by]
        );
        return res.rows[0];
    },
    async findById(id) {
        const res = await db.query('SELECT * FROM content WHERE id = $1', [id]);
        return res.rows[0];
    },
    async findAll() {
        const res = await db.query('SELECT * FROM content ORDER BY created_at DESC');
        return res.rows;
    },
    async update(id, fields) {
        // Only allow updating title, data, likes, views
        const keys = Object.keys(fields);
        const updates = [];
        const values = [];
        keys.forEach((key, i) => {
            updates.push(`${key} = $${i + 2}`);
            values.push(fields[key]);
        });
        if (!updates.length) return null;
        const res = await db.query(
            `UPDATE content SET ${updates.join(', ')}, updated_at = CURRENT_TIMESTAMP WHERE id = $1 RETURNING *`,
            [id, ...values]
        );
        return res.rows[0];
    },
    async delete(id) {
        await db.query('DELETE FROM content WHERE id = $1', [id]);
    }
};

module.exports = Content;
