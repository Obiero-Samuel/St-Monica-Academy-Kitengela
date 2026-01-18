@echo off
REM Run this script to apply the schema.sql to your local PostgreSQL database
REM Make sure psql is in your PATH and the database exists

SET DB_NAME=interactive_website
SET DB_USER=postgres
SET DB_HOST=localhost
SET DB_PORT=5432

psql -U %DB_USER% -h %DB_HOST% -p %DB_PORT% -d %DB_NAME% -f "..\database\schema.sql"
