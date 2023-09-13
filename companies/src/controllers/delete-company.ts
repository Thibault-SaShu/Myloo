import {Request, Response} from "express";
import {Company} from "../models/company-model";
import {NotFoundError} from "@myloo/commun";

const deleteCompany =  async (req: Request, res: Response) =>{
    const company = await Company.findByIdAndDelete(req.params.id)
    if (!company) {
        throw new NotFoundError();
    }
    res.status(201).send({})

}

export default deleteCompany