import {Request, Response} from "express";
import {Member} from "../models/member-model";
import {NotFoundError} from "@myloo/commun";

const getMember =  async (req: Request, res: Response) =>{
    const member = await Member.findById(req.params.id)
    if (!member) {
        throw new NotFoundError();
    }
    res.status(201).send(member)
}

export default getMember

