/**
 * Abstract class to format errors classes in express services
 * Extend the error class form Express
 */
export abstract class CustomError extends Error {
    abstract statusCode: number;

    /**
     * @param message Message to send to the front end
     * @protected
     */
    protected constructor(message: string) {
        super(message);
        Object.setPrototypeOf(this, CustomError.prototype);
    }

    /**
     * Classes "CustomError" must have a fuction serializeErrors()
     * to format Errors messages
     */
    abstract serializeErrors(): { message: string; field?: string }[];
}