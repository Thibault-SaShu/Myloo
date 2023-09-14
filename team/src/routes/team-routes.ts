import express, {Request} from "express";
import {body} from "express-validator";
import {requireAuth, validateRequestMiddleware} from "@myloo/commun";
import createNewMember from "../controllers/create-member-controller";
import getMembers from "../controllers/get-members-controller";
import getMember from "../controllers/get-member";
import updateMember from "../controllers/update-member";
import deleteMember from "../controllers/delete-member";


const router = express.Router();

const validationArrayRequired =
    [
        body("name")
            .trim()
            .isLength({ min: 1, max: 30 })
            .withMessage("Team member must have a name with a maximum of 30 characters")
    ]

const validationArrayForUpdate =
    [
        body("name")
            .trim()
            .optional()
            .isLength({ min: 1, max: 30 })
            .withMessage("Team must have a name with a maximum of 30 characters")
    ]

const validationArrayOptional =  [
    body("phone")
        .optional()
        .isArray({min: 1, max: 5})
        .withMessage("The phone numbers is an array with a maximum of 5 rows"),
    body("address")
    .optional()
    .isArray({min: 1, max: 5})
    .withMessage("The address is an array with a maximum of 5 rows"),
    body("zip")
        .optional()
        .isLength({ min: 1, max: 30 })
        .withMessage("The zip code have a maximum of 30 characteres"),
    body("city")
        .optional()
        .isLength({ min: 1, max: 30 })
        .withMessage("The address have a maximum of 30 characteres"),
    body("state")
        .optional()
        .isLength({ min: 1, max: 30 })
        .withMessage("The state have a maximum of 30 characteres"),
    body("ico")
        .optional()
        .trim()
        .isLength({ min: 1, max: 12 })
        .withMessage("The ICO have a maximum of 12 characteres"),
    body("dic")
        .optional()
        .trim()
        .isLength({ min: 1, max: 12 })
        .withMessage("The DIČ have a maximum of 12 characteres"),
    body("account")
        .optional()
        .trim()
        .isLength({ min: 1, max: 30 })
        .withMessage("The account have a maximum of 30 characteres"),
    body("iban")
        .optional()
        .trim()
        .isLength({ min: 1, max: 30 })
        .withMessage("The iban have a maximum of 30 characteres"),
    body("bic")
        .optional()
        .trim()
        .isLength({ min: 1, max: 30 })
        .withMessage("The bic have a maximum of 30 characteres"),
    body("status")
        .optional()
        .isInt()
        .withMessage("The status must be a number"),
    body("company")
        .optional()
        .trim()
        .isLength({ min: 1, max: 30 })
        .withMessage("The id of the company is not correct"),
    body("isActive")
        .optional()
        .isBoolean()
        .withMessage("is Active must be a boolean"),
]

router
    .route("/")
    .post(requireAuth,
        validationArrayRequired.concat(validationArrayOptional),
        validateRequestMiddleware
        ,createNewMember)

    .get(requireAuth, getMembers)

router
    .route('/:id')
    .get (requireAuth, getMember)
    .put (requireAuth,
        validationArrayRequired.concat(validationArrayForUpdate),
        validateRequestMiddleware,
        updateMember)
    .delete (requireAuth, deleteMember)



export {router as teamRouter}
