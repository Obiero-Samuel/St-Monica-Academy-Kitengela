const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL || 'postgresql://postgres:password@localhost:5432/interactive_website',
    ssl: process.env.PGSSLMODE === 'require' ? { rejectUnauthorized: false } : false,
});

module.exports = {
    query: (text, params) => pool.query(text, params),
    pool,
};
