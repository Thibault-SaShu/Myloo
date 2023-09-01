import express from "express";
import {loginForm} from "../controllers/view-controller";

const router = express.Router();
router
    .route('/')
    .get(loginForm);

export {router as viewRouter}
