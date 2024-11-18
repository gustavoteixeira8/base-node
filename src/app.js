import "dotenv/config"

import "./database/sequelize"
import { config } from "./config/config"

import express from "express"
import helmet from "helmet"
import cors from "cors"

class App {

    _express = express()

    _setupMiddlewares() {
        this._express.use(helmet())
        this._express.use(cors())
        this._express.use(express.json())
        this._express.use(express.urlencoded({ extended: true }))
    }

    _setupDatabase() {

    }

    _setupRoutes() {

        this._express.get("/", (req, res) => {
            res.json("hello world!")
        })

    }

    start() {
        this._setupDatabase()
        this._setupMiddlewares()
        this._setupRoutes()

        this._express.listen(config.server.PORT, () => console.log("App started on port: ", config.server.PORT))
    }

}

const app = new App()

app.start()
