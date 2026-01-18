// Example usage of the configured PostgreSQL connection
const db = require('../config/database');

async function testConnection() {
    try {
        const res = await db.query('SELECT NOW()');
        console.log('PostgreSQL connected:', res.rows[0]);
    } catch (err) {
        console.error('Database connection error:', err);
    }
}

testConnection();
