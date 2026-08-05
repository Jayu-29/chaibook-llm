import express from 'express';
import "dotenv/config"
import { auth } from './lib/auth.js';
import { toNodeHandler } from 'better-auth/node';

const app = express();
const PORT = process.env.PORT;

app.all('/api/auth/{*any}', toNodeHandler(auth));

app.get("/", (req,res) => {
    res.send("Hello World");
});

app.listen(PORT , () => {
    console.log("Server is running on port 8080");
});

app.get("/health", (_req,res) =>{
    res.send({ status: "ok"});
})