const db = require('../config/database');

const Interaction = {
    async create({ user_id, element_id, interaction_type, duration, metadata }) {
        const res = await db.query(
            'INSERT INTO user_interactions (user_id, element_id, interaction_type, duration, metadata) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [user_id, element_id, interaction_type, duration, JSON.stringify(metadata)]
        );
        return res.rows[0];
    },
    async findByUser(user_id) {
        const res = await db.query('SELECT * FROM user_interactions WHERE user_id = $1 ORDER BY created_at DESC', [user_id]);
        return res.rows;
    },
    async findAll() {
        const res = await db.query('SELECT * FROM user_interactions ORDER BY created_at DESC');
        return res.rows;
    }
};

module.exports = Interaction;
