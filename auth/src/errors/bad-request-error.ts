import { CustomError } from './custom-error';

/**
 * Class extends CustomError to create an error because of a bad request
 * StatusCode=400
 */
export class BadRequestError extends CustomError {
    statusCode = 400;

    constructor(public message: string) {
        super(message);

        Object.setPrototypeOf(this, BadRequestError.prototype);
    }

    serializeErrors() {
        return [{ message: this.message }];
    }
}