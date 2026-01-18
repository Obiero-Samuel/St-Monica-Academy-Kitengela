// UserInteraction model for PostgreSQL
const db = require('../config/database');

const UserInteraction = {
    async create({ user_id, element_id, interaction_type, duration, metadata = {} }) {
        const result = await db.query(
            `INSERT INTO user_interactions (user_id, element_id, interaction_type, duration, metadata)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
            [user_id, element_id, interaction_type, duration, metadata]
        );
        return result.rows[0];
    },

    async findByUser(user_id) {
        const result = await db.query('SELECT * FROM user_interactions WHERE user_id = $1', [user_id]);
        return result.rows;
    },
};

module.exports = UserInteraction;
