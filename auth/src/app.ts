import express from "express";
import 'express-async-errors'; //For the Error Handler
import cookieSession from 'cookie-session';
import path from "path";

import {userRouter} from "./routes/user-routes";
import {viewRouter} from "./routes/view-route";
import {customExpressApp, errorHandlerMiddleware, NotFoundError} from "@myloo/commun";

// Creation of express app with parsers and some security middlewares
const app = customExpressApp()

// Declare template engine
app.set('view engine', 'pug');
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


app.all('*', async () => {
    throw new NotFoundError();
});

//middlewares to manage and send errors to the front end
app.use(errorHandlerMiddleware);

export default app
