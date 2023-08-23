import {Request, Response} from "express";
import {User} from "../models/user-model";
import {BadRequestError} from "../errors/bad-request-error";
import Password from "../utils/password";
// @ts-ignore
import jwt from "jsonwebtoken";

export const signin = async (req: Request, res: Response)=> {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
        throw new BadRequestError('Invalid credentials');
    }

    const passwordsMatch = await Password.compare(
        existingUser.password,
        password
    );

    if (!passwordsMatch) {
        throw new BadRequestError('Invalid Credentials');
    }

    // Generate JWT
    const userJwt = jwt.sign(
        {
            id: existingUser.id,
            email: existingUser.email,
        },
        process.env.JWT_KEY!
    );

    req.session = {
        jwt: userJwt,
    };

    res.status(200).send(existingUser);

}