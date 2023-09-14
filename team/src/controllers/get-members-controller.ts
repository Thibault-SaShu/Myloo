import {Request, Response} from "express";
import {Member} from "../models/member-model";
import {NotFoundError} from "@myloo/commun";

const getMembers =  async (req: Request, res: Response) =>{
    const members = await Member.find().select("name phone company status isActive")
    if (!members) {
        throw new NotFoundError();
    }
    res.status(201).send(members)
}

export default getMembers