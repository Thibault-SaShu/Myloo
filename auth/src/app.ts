import express, {json} from "express";
import 'express-async-errors'; //For the Error Handler
import cookieSession from 'cookie-session';
import {userRouter} from "./routes/user-routes";
import {errorHandlerMiddleware} from "./middlewares/error-handler-middleware";
import {NotFoundError} from "./errors/not-found-error";
import path from "path";
import {viewRouter} from "./routes/view-route";

const app = express()
app.set('trust proxy', true); //Make Ingress and express compatible
app.use(json()); //To parse JSON

// Declare template engine
app.set('view engine', 'pug');
console.log(__dirname)
app.set('views', path.join(__dirname, 'views'));

// Serving static files
app.use(express.static(path.join(__dirname, 'public')));

//cookie-based session middleware to save JWT on the client
app.use(
    cookieSession({
        signed: false,
        secure: false,
    })
);

app.use('/api/users', userRouter)
app.use('/auth', viewRouter)


app.all('*', async (req, res) => {
    throw new NotFoundError();
});

//middlewares to manage and send errors to the front end
app.use(errorHandlerMiddleware);

export default app
