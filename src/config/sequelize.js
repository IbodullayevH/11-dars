require(`dotenv`).config()
const {Sequelize} = require(`sequelize`)


const sequelize = new Sequelize({
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    username: process.env.USER,
    port: process.env.PSQL_PORT,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    logging: false,
})

module.exports = sequelize
