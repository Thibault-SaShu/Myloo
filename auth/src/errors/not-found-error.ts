import { CustomError } from "./custom-error";

/**
 * Class extends CustomError to create an error when a route is not found
 * StatusCode=404
 */
export class NotFoundError extends CustomError {
    statusCode = 404;

    constructor() {
        super("Route not found");

        Object.setPrototypeOf(this, NotFoundError.prototype);
    }

    serializeErrors() {
        return [{ message: "Not Found" }];
    }
}