import express, {Request} from "express";
import {body} from "express-validator";
import {requireAuth, validateRequestMiddleware} from "@myloo/commun";
import createNewCompany from "../controllers/create-company-controller";
import getCompanies from "../controllers/get-companies-comtroller";
import getCompany from "../controllers/get-company";
import updateCompany from "../controllers/update-company";
import deleteCompany from "../controllers/delete-company";


const router = express.Router();

const validationArrayRequired =
    [
        body("name")
            .trim()
            .isLength({ min: 1, max: 50 })
            .withMessage("Company must have a name with a maximum of 50 characters")
    ]

const validationArrayForUpdate =
    [
        body("name")
            .trim()
            .optional()
            .isLength({ min: 1, max: 50 })
            .withMessage("Company must have a name with a maximum of 50 characters")
    ]

const validationArrayOptional =  [
    body("email")
        .optional()
        .isEmail()
        .isLength({ min: 1, max: 50 })
        .withMessage("It is not an email"),

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
]

router
    .route("/")
    .post(requireAuth,
        validationArrayRequired.concat(validationArrayOptional),
        validateRequestMiddleware
        ,createNewCompany)

    .get(requireAuth, getCompanies)

router
    .route('/:id')
    .get (requireAuth, getCompany)
    .put (requireAuth,
        validationArrayRequired.concat(validationArrayForUpdate),
        validateRequestMiddleware,
        updateCompany)
    .delete (requireAuth, deleteCompany)



export {router as companyRouter}
