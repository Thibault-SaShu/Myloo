import {Request, Response} from "express";
import {Member} from "../models/member-model";
import {NotFoundError} from "@myloo/commun";

const updateMember =  async (req: Request, res: Response) =>{
    const member = await Member.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    if (!member) {
        throw new NotFoundError();
    }
    res.status(201).send(member)
}

export default updateMember