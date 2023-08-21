import {Request, Response, NextFunction} from 'express';
import {User} from "../models/userModel";
import jwt from 'jsonwebtoken';

export const signup = async (req: Request, res: Response)=>{
    const {email, password} = req.body;

    const existingUser = await User.findOne({email});

    if (existingUser) {
        res.send("USer sill registred")
    }

    const user = User.build({email, password});
    await user.save();

    const userJwt = jwt.sign(
        {
            id: user.id,
            email: user.email
        },
        process.env.JWT_KEY!
    )

    req.session = {
        jwt: userJwt
    };

    res.status(201).send(user);




}