
export enum VALIDATOR_TYPE{
    number,
    email,
    text,
    phone,
    psc,
    password
}

export type ValidatorCreator = {
    type :VALIDATOR_TYPE,
    minLength ?: number,
    maxLength ?: number,
    isRequired ?: boolean,
}

export type ValidationElementFlag = {
    isValidate : boolean,
    text : string
}

export const INPUT_FLAG ={
    isNeeded : "●",
    isError : "✕",
    isNotEmail : "@",
    isNotPhone : "✆",
    isNotPSC : "✉",
    isNotNumber : "➃",
    isNotPassword : "✕"
}

export const fieldValidation : (value : string, creator : ValidatorCreator) => ValidationElementFlag = (value, creator) =>{

    let result: ValidationElementFlag = {isValidate: true, text: "-"}

    //If field is required
    if (creator.isRequired && !value) return  {isValidate:false, text: INPUT_FLAG.isNeeded}

    //control the lenght of the string
    if (creator.maxLength){
        if (value.length > creator.maxLength){
            const returnValue = creator.maxLength - value.length
            result =  {isValidate:false, text:returnValue.toString()}
        } else {
            const returnValue = creator.maxLength - value.length
            result =  {isValidate:true, text:returnValue.toString()}
        }
    }

    if (creator.minLength && value.length < creator.minLength){
        const returnValue = creator.minLength - value.length
        return {isValidate: false, text: `+${returnValue.toString()}`}
    }

    switch (creator.type){
        case VALIDATOR_TYPE.email:
            const emailRegex = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
            if(!value.match(emailRegex) && value !== ""){
                return {isValidate: false, text:INPUT_FLAG.isNotEmail}
            }
            break
        case VALIDATOR_TYPE.phone:
            const phoneRegex = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
            if(!value.match(phoneRegex) && value !== ""){
                return {isValidate: false, text:INPUT_FLAG.isNotPhone}
            }
            break
        case VALIDATOR_TYPE.psc:
            const pscRegex = /^[a-z0-9][a-z0-9\- ]{0,10}[a-z0-9]$/;
            if(!value.match(pscRegex) && value !== "") {
                return {isValidate: false, text: INPUT_FLAG.isNotPSC}
            }
            break
        case VALIDATOR_TYPE.number:
            const numberRegex = /^\d+$/;
            if(!value.match(numberRegex)){
                return {isValidate: false, text:INPUT_FLAG.isNotNumber}
            }
            break
        case VALIDATOR_TYPE.password:
            const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
            if(!value.match(passRegex)&& value !== ""){
                return {isValidate: false, text:INPUT_FLAG.isNotPassword}
            }
            break
    }

    return  result
}

