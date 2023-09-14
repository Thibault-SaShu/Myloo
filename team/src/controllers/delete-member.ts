import {Request, Response} from "express";
import {Member} from "../models/member-model";
import {NotFoundError} from "@myloo/commun";

const deleteMember =  async (req: Request, res: Response) =>{
    const member = await Member.findByIdAndDelete(req.params.id)
    if (!member) {
        throw new NotFoundError();
    }
    res.status(201).send({})

}

export default deleteMember