import { scrypt, randomBytes } from 'crypto';
import { promisify } from 'util';

const scryptAsync = promisify(scrypt);

/** Utilities to hash or compare passwords */
class Password {

    /**
     * Method to hash a password
     * @param password password to hash
     * @returns {string} hashed password to save on the database
     */
    static async toHash(password: string) : Promise<string> {
        const salt = randomBytes(8).toString('hex');
        const buf = (await scryptAsync(password, salt, 64)) as Buffer;

        return `${buf.toString('hex')}.${salt}`;
    }

    /**
     * Method to hash a password
     * @param storedPassword hashed password from the database
     * @param suppliedPassword password sent by the user to be logged in
     * @returns boolean true if the passwords corresponds
     */
    static async compare(storedPassword: string, suppliedPassword: string): Promise<boolean> {
        const [hashedPassword, salt] = storedPassword.split('.');
        const buf = (await scryptAsync(suppliedPassword, salt, 64)) as Buffer;
        console.log(hashedPassword)
        return buf.toString('hex') === hashedPassword;
    }
}

export default Password