import {Request, Response} from "express";

export const currentUser = async (req: Request, res: Response)=> {
    res.send({currentUser: req.currentUser || null});
}