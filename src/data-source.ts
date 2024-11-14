import "reflect-metadata"
import { DataSource } from "typeorm"
import { Users } from "./entity/Users.model"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "user",
    password: "password",
    database: "mydatabase",
    synchronize: true,
    logging: true,
    entities: [__dirname + '/entity/*.model.js'],
    migrations: [],
    subscribers: [],
})