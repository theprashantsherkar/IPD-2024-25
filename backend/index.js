import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors'
import cookieparser from 'cookie-parser';
import AdminRoutes from './routes/adminRoutes.js'

export const app = express();

dotenv.config({
    path:'./data/config.env'
})

app.use(cors({
    origin: "*",
    credentials: true,
    AccessControlAllowOrigin: true,
    AccessControlAllowHeaders: true,
    AccessControlAllowMethods: true,
    AccessControlAllowCredentials: true,
}))

app.use(express.json());
app.use(cookieparser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/admin', AdminRoutes);
