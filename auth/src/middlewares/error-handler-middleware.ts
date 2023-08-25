import { Request, Response, NextFunction } from "express";
import {CustomError} from "../errors/custom-error";

/**
 *Middleware to detect if an error is present to send it to the frontend
 */
export const errorHandlerMiddleware = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    //If the error is a CustomError class instance, we send the message with the serializeErrors class method
    if (err instanceof CustomError) {
        return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    }

    //If the error is unknown, we send a generic message error
    res.status(400).send({
        message: 'Something went wrong'
    });
};