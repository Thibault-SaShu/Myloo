import {Request, Response, NextFunction} from 'express';
import {User} from "../models/user-model";
import jwt from 'jsonwebtoken';
import {BadRequestError} from "@myloo/commun";
import {UserCreatedPublisher} from "../events/publishers/user-created-publisher";
import {natsWrapper} from "../utils/nats-wrapper-util";

export const signup = async (req: Request, res: Response)=>{
    const {email, password} = req.body;

    const existingUser = await User.findOne({email});

    if (existingUser) {
        throw new BadRequestError('Email in use');
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

    await new UserCreatedPublisher(natsWrapper.client).publish({
        id : user.id,
        email : user.email,
        isActive : user.isActive,
        isAdmin : user.isAdmin
    })

    res.status(201).send(user);




}