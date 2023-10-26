import {ChangeEvent, FunctionComponent, useEffect, useState} from "react";
import {
    TextFieldContainer,
    TextFieldIcon,
    TextFieldInput,
} from "./text-field.styles.ts";
import FieldsTag from "../../tags/fields-tag/fields-tag.component.tsx";
import {
    fieldValidation, ValidationElementFlag,
    ValidatorCreator
} from "../../../../utils/fields-validator.util.tsx";


export interface InputTextEvent extends ChangeEvent<HTMLInputElement> {
    name ?: string,
    value : string | string[]
    isValid ?: boolean | null
}
export type InputTextOnChange = (event : InputTextEvent )=>void



export type TextFIeldProps ={
    value?: string,
    placeholder?: string,
    isPassword?: boolean,
    onChange:  InputTextOnChange,
    maxLength?: number,
    autofocus?:boolean,
    validator?: null | ValidatorCreator
    disabled?: boolean
}

const TextField:FunctionComponent<TextFIeldProps> = ({
                                                            value= "",
                                                            placeholder="...",
                                                            isPassword=false,
                                                            onChange,
                                                            validator =null,
                                                            disabled = false,
                                                        })=>{

    const [flagObj, setFlagObj] = useState<ValidationElementFlag | null>(null )

    // Field control to show the flag if field is empty and required at start
    useEffect(() => {
        if(validator && validator.isRequired) setFlagObj(fieldValidation(value, validator))
    }, []);

    const onChangeHandler  = (e : InputTextEvent) =>{
        e.preventDefault()
        if (validator){
            const validationObj = fieldValidation (e.target.value, validator)
            setFlagObj({...validationObj})
            e.isValid = validationObj.isValidate
            e.value = e.target.value
        }
        onChange(e)
    }


    return(
        <TextFieldContainer>
            <TextFieldInput
                onChange={onChangeHandler}
                placeholder={placeholder}
                value = {value}
                style={{opacity : disabled ? 0 : 1}}
                type={isPassword ? "password"  :"text"}
            />
            <TextFieldIcon>
                <FieldsTag isValid={flagObj ? flagObj.isValidate : null} text={flagObj ? flagObj.text : null} isVisible={!!flagObj && !disabled}/>
            </TextFieldIcon>
        </TextFieldContainer>
    )
}

export default TextField
