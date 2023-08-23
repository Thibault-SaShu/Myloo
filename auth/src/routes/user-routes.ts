import express from "express";
import {signup} from "../controllers/signup-controller";
import {body} from "express-validator";
import {validateRequestMiddleware} from "../middlewares/validate-request-middleware";
import {signout} from "../controllers/signout-controller";
import {signin} from "../controllers/signin-controller";
import {currentUser as currentUserController} from "../controllers/user-controller";
import {currentUser} from "../middlewares/current-user-middleware";

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
    .route("/currentuser")
    .get(currentUser, currentUserController)

export {router as userRouter}
