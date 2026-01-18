#!/bin/bash
# Run this script to apply the schema.sql to your local PostgreSQL database
# Make sure psql is in your PATH and the database exists

DB_NAME=interactive_website
DB_USER=postgres
DB_HOST=localhost
DB_PORT=5432

psql -U "$DB_USER" -h "$DB_HOST" -p "$DB_PORT" -d "$DB_NAME" -f "../database/schema.sql"
