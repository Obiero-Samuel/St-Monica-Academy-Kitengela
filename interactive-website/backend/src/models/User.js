const db = require('../config/database');

const User = {
    async findByEmail(email) {
        const res = await db.query('SELECT * FROM users WHERE email = $1', [email]);
        return res.rows[0];
    },
    async create({ username, email, password_hash, avatar_url = null, preferences = {} }) {
        const res = await db.query(
            'INSERT INTO users (username, email, password_hash, avatar_url, preferences) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [username, email, password_hash, avatar_url, JSON.stringify(preferences)]
        );
        return res.rows[0];
    },
    async findById(id) {
        const res = await db.query('SELECT * FROM users WHERE id = $1', [id]);
        return res.rows[0];
    },
    async updateLastActive(id) {
        await db.query('UPDATE users SET last_active = CURRENT_TIMESTAMP WHERE id = $1', [id]);
    }
};

module.exports = User;
