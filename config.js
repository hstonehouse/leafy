require('dotenv').config();

const dbConnectionString = process.env.DB_CONNECTION_STRING;
if (!dbConnectionString) {
    throw new Error (`DB connection string not available.`);
} 

module.exports = { dbConnectionString }