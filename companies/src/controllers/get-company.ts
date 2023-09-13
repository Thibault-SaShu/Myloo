import {Request, Response} from "express";
import {Company} from "../models/company-model";
import {NotFoundError} from "@myloo/commun";

const getCompany =  async (req: Request, res: Response) =>{
    const company = await Company.findById(req.params.id)
    if (!company) {
        throw new NotFoundError();
    }
    res.status(201).send(company)
}

export default getCompany

