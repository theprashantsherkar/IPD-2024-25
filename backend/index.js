import express from 'express';
import { config } from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors'

export const app = express();

config({
    path: "./data/config.env"
});

app.use(cors({
    origin: "*",
    credentials: true,
    AccessControlAllowOrigin: true,
    AccessControlAllowHeaders: true,
    AccessControlAllowMethods: true,
    AccessControlAllowCredentials: true,
}))

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
