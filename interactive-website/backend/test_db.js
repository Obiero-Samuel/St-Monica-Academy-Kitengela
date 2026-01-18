// Utility to test PostgreSQL connection and basic query
const db = require('./src/config/database');

(async () => {
    try {
        const res = await db.query('SELECT NOW()');
        console.log('PostgreSQL connected! Server time:', res.rows[0].now);
        process.exit(0);
    } catch (err) {
        console.error('Database connection failed:', err);
        process.exit(1);
    }
})();
