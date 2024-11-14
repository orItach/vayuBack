import express, { Request, Response } from 'express';
import cors from "cors";
import routes from "./routes/index"
// import Database from './config';
import { AppDataSource } from "./data-source"
import { Users } from "./entity/Users.model"


const app = express();

const port:number = 3001;

var corsOptions = {
    origin: "http://localhost:3000",
};

AppDataSource.initialize().then(async () => {

}).catch(error => console.log(error))
// new Database()
app.use(cors(corsOptions));

app.use(express.json());

// Start the server and listen on the specified port
app.listen(port, () => {
    // Log a message when the server is successfully running
    console.log(`Server is running on http://localhost:${port}`);
});

const {users,groups} = routes
app.use('/users',users)
app.use('/groups',groups)