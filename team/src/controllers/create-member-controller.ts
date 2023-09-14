import {Request, Response} from "express";
import {Member} from "../models/member-model";

const createNewMember = async (req: Request, res: Response) =>{

    const newMember = await Member.create(req.body);
    res.status(201).send(newMember)
}

export default createNewMember