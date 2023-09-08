import express from "express";
import {signup} from "../controllers/signup-controller";
import {body} from "express-validator";
import {signout} from "../controllers/signout-controller";
import {signin} from "../controllers/signin-controller";
import {currentUser as getCurrentUser} from "../controllers/user-controller";
import {currentUser, validateRequestMiddleware} from "@myloo/commun";
import {describe} from "node:test";

const router = express.Router();

router
    .route("/signup")
    .post(
        [
            body("email").isEmail().withMessage("Email must be valid"),
            body("password")
                .trim()
                .isLength({ min: 4, max: 20 })
                .withMessage("Password must be between 4 and 20 characters"),
        ],
        validateRequestMiddleware,
        signup)

router
    .route("/signout")
    .post(signout)

router
    .route("/signin")
    .post( [
        body("email").isEmail().withMessage("Email must be valid"),
        body("password")
            .trim()
            .notEmpty()
            .withMessage("You must supply a password"),
    ],
        validateRequestMiddleware,
        signin)

router
    .route("/me")
    .get(currentUser, getCurrentUser)

export {router as userRouter}
