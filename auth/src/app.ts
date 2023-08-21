import express, {json} from "express";
import cookieSession from 'cookie-session';
import {userRouter} from "./routes/userRoutes";

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

export default app
