import { CustomError } from './custom-error';

/**
 * Class extends CustomError to create a database connection error
 * StatusCode=500
 */
export class DatabaseConnectionError extends CustomError {
    statusCode = 500;
    reason = 'Error connecting to database';

    constructor() {
        super('Error connecting to db');
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }

    //Fonction pour mettre en forme le message d´erreur
    serializeErrors() {
        return [{ message: this.reason }];
    }

}