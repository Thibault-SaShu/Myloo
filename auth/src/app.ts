import express, {json} from "express";
import cookieSession from 'cookie-session';
import {userRouter} from "./routes/userRoutes";
import {errorHandler} from "./middlewares/error-handler";

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

//middlewares to manage and send errors to the front end
app.use(errorHandler);

export default app
