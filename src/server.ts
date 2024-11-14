import express, { Request, Response } from 'express';
import cors from "cors";
import routes from "./routes/index"
// import Database from './config';
import { AppDataSource } from "./data-source"
import { Users } from "./entity/Users.model"


const app = express();

const port:number = 3000;

var corsOptions = {
    origin: "http://localhost:8085",
};

AppDataSource.initialize().then(async () => {
    // console.log("Inserting a new user into the database...")
    // const user = new User()
    // user.name = "Timber"
    // await AppDataSource.manager.save(user)
    // console.log("Saved a new user with id: " + user.id)

    // console.log("Loading users from the database...")
    // const users = await AppDataSource.manager.find(User)
    // console.log("Loaded users: ", users)

    // console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
// new Database()
app.use(cors(corsOptions));

app.use(express.json());

// Start the server and listen on the specified port
app.listen(port, () => {
    // Log a message when the server is successfully running
    console.log(`Server is running on http://localhost:${port}`);
});

const {users} = routes
app.use('/users',users)
