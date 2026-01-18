// User model for PostgreSQL
const db = require('../config/database');

const User = {
    async create({ username, email, password_hash, avatar_url = null, preferences = {} }) {
        const result = await db.query(
            `INSERT INTO users (username, email, password_hash, avatar_url, preferences)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
            [username, email, password_hash, avatar_url, preferences]
        );
        return result.rows[0];
    },

    async findByEmail(email) {
        const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
        return result.rows[0];
    },

    async findById(id) {
        const result = await db.query('SELECT * FROM users WHERE id = $1', [id]);
        return result.rows[0];
    },
};

module.exports = User;
