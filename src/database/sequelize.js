import { Sequelize } from "sequelize";
import { config } from "../config/config";
import "tedious"

const sequelize = new Sequelize(config.database.DSN, {
    dialect: 'mssql',
})

export default sequelize
