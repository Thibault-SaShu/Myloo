import { CustomError } from './custom-error';

/**
 * Class extends CustomError to create an error when a user is not authorized to access to a route
 * StatusCode=401
 */
export class NotAuthorizedError extends CustomError {
    statusCode = 401;

    constructor() {
        super('Not Authorized');

        Object.setPrototypeOf(this, NotAuthorizedError.prototype);
    }

    serializeErrors() {
        return [{ message: 'Not authorized' }];
    }
}