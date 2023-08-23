import express, {json} from "express";
import 'express-async-errors'; //For the Error Handler
import cookieSession from 'cookie-session';
import {userRouter} from "./routes/user-routes";
import {errorHandlerMiddleware} from "./middlewares/error-handler-middleware";
import {NotFoundError} from "./errors/not-found-error";

const app = express()
app.set('trust proxy', true); //Make Ingress and express compatible
app.use(json()); //To parse JSON

//cookie-based session middleware to save JWT on the client
app.use(
    cookieSession({
        signed: false,
        secure: false,
    })
);

app.use('/api/users', userRouter)
app.get("/api/users/currentuser", (req, res) => {
    res.send("Hi copains!");
});

app.all('*', async (req, res) => {
    throw new NotFoundError();
});

//middlewares to manage and send errors to the front end
app.use(errorHandlerMiddleware);

export default app
