import express from "express";
import {requireAuth} from "@myloo/commun";
import {createNewCompany} from "../controllers/new-company-controller";

const router = express.Router();

router
    .route("/")
    .post(requireAuth, createNewCompany)

export {router as companyRouter}
