import {Request, Response} from "express";

export const loginForm = async(req: Request, res:Response) => {
    res
        .status(200)
        .render('login', {title: 'Login'});
};