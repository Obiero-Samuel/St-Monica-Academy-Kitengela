// RealtimeEvent model for PostgreSQL
const db = require('../config/database');

const RealtimeEvent = {
    async create({ event_type, event_data }) {
        const result = await db.query(
            `INSERT INTO realtime_events (event_type, event_data)
       VALUES ($1, $2) RETURNING *`,
            [event_type, event_data]
        );
        return result.rows[0];
    },

    async list({ limit = 20, offset = 0 } = {}) {
        const result = await db.query('SELECT * FROM realtime_events ORDER BY created_at DESC LIMIT $1 OFFSET $2', [limit, offset]);
        return result.rows;
    },
};

module.exports = RealtimeEvent;
