import express, {Request, Response} from "express";
import 'express-async-errors'; //For the Error Handler
import cookieSession from 'cookie-session';
import {currentUser, customExpressApp, errorHandlerMiddleware, NotFoundError} from "@myloo/commun";
import {companyRouter} from "./routes/company-routes";

// Creation of express app with parsers and some security middlewares
const app = customExpressApp()

app.use(
    cookieSession({
        signed: false,
        secure: false,
    })
);
app.use(currentUser);

app.use('/api/company', companyRouter)

app.all('*', async () => {
    throw new NotFoundError();
});

console.log("No Middle")

//middlewares to manage and send errors to the front end
app.use(errorHandlerMiddleware);

export default app
