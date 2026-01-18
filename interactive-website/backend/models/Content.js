// Content model for PostgreSQL
const db = require('../config/database');

const Content = {
    async create({ title, content_type, data, created_by }) {
        const result = await db.query(
            `INSERT INTO content (title, content_type, data, created_by)
       VALUES ($1, $2, $3, $4) RETURNING *`,
            [title, content_type, data, created_by]
        );
        return result.rows[0];
    },

    async findById(id) {
        const result = await db.query('SELECT * FROM content WHERE id = $1', [id]);
        return result.rows[0];
    },

    async list({ limit = 10, offset = 0 } = {}) {
        const result = await db.query('SELECT * FROM content ORDER BY created_at DESC LIMIT $1 OFFSET $2', [limit, offset]);
        return result.rows;
    },
};

module.exports = Content;
