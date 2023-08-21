import express from "express";
import {signup} from "../controllers/signupController";

const router = express.Router();

router
    .route("/signup")
    .post(signup)

export {router as userRouter}