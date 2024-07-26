import express, {Application, Request, Response} from 'express';
import apolloServer from './config/apolloServer.js';
import {expressMiddleware} from '@apollo/server/express4';

import 'dotenv/config';
import cors from 'cors';

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.get("/", (req:Request, res:Response) => {
    res.send("Hello From Server!");
});

const startServer = async() => {
    await apolloServer.start();
    app.use("/graphql", expressMiddleware(apolloServer));
}

startServer();

app.listen(process.env.PORT, () => {
    console.log(`Server is Running on PORT ${process.env.PORT}`);
})