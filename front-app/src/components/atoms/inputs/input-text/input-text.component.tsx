import {InputTextContainer} from "./input-text.styles.ts";
import {FunctionComponent} from "react";
import TextsForm from "../../texts/input-label/input-label.component.tsx";
import TextField, {InputTextEvent, InputTextOnChange} from "../../fields/text-field/text-field.component.tsx";
import {ValidatorCreator} from "../../../../utils/fields-validator.util.tsx";



type InputTextProps = {
    name : string,
    value ?: string,
    editable ?: boolean,
    label : string,
    placeholder ?: string
    onChange ?: InputTextOnChange
    validator?: null | ValidatorCreator
    isPassword ?: boolean
}




const InputText : FunctionComponent<InputTextProps> = ({
                                                           name,
                                                           value= "",
                                                           editable = false,
                                                           label,
                                                           placeholder = '...',
                                                           onChange,
                                                           validator = null,
                                                           isPassword=false
                                                       }) => {

    const onChangeHandler = (e :  InputTextEvent) =>{
        if (onChange){
            e.name = name
            onChange(e)
        }

    }



    return(
        <InputTextContainer>
            <TextsForm>{label}</TextsForm>
            {editable ?
                <TextField onChange={onChangeHandler} placeholder={placeholder} value={value}  validator={validator} isPassword={isPassword}/> :
                <TextsForm isValue>{value}</TextsForm>
            }
        </InputTextContainer>
    )
}

export default InputText
