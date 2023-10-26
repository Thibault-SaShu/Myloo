import {VALIDATOR_TYPE, ValidatorCreator} from "../utils/fields-validator.util.tsx";

export const companyName: ValidatorCreator = {type: VALIDATOR_TYPE.text, isRequired:true, maxLength:50}
export const companyEmail: ValidatorCreator = {type: VALIDATOR_TYPE.email, maxLength:50}
export const companyPhone: ValidatorCreator = {type: VALIDATOR_TYPE.text, maxLength:15}
export const companyAddress: ValidatorCreator = {type: VALIDATOR_TYPE.text, maxLength:50}
export const companyZip: ValidatorCreator = {type: VALIDATOR_TYPE.text, maxLength:10}
export const companyCity: ValidatorCreator = {type: VALIDATOR_TYPE.text, maxLength:10}
export const companyState: ValidatorCreator = {type: VALIDATOR_TYPE.text, maxLength:10}
export const companyIco: ValidatorCreator = {type: VALIDATOR_TYPE.text, maxLength:10}
export const companyDic: ValidatorCreator = {type: VALIDATOR_TYPE.text, maxLength:10}
export const companyIban: ValidatorCreator = {type: VALIDATOR_TYPE.text, maxLength:10}
export const companyBic: ValidatorCreator = {type: VALIDATOR_TYPE.text, maxLength:10}