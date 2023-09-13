import {Request, Response} from "express";
import {Company} from "../models/company-model";
import {NotFoundError} from "@myloo/commun";

const updateCompany =  async (req: Request, res: Response) =>{
    const company = await Company.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    if (!company) {
        throw new NotFoundError();
    }
    res.status(201).send(company)
}

export default updateCompany