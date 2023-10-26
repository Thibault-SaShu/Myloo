import TextField, {
    InputTextEvent,
    InputTextOnChange
} from "../../fields/text-field/text-field.component.tsx";
import {ValidatorCreator} from "../../../../utils/fields-validator.util.tsx";
import {FunctionComponent} from "react";
import {
    InputTextMultiFieldsContainer,
    InputTextMultiLabelContainer
} from "./input-text-multi.styles.ts";
import TextsForm from "../../texts/input-label/input-label.component.tsx";
import {InputTextContainer} from "../input-text/input-text.styles.ts";


type InputTextMultiProps = {
    name : string,
    value ?: string[],
    editable ?: boolean,
    label : string,
    placeholder ?: string
    onChange ?: InputTextOnChange
    fieldsNumber ?: number
    validator?: null | ValidatorCreator

}


const InputTextMulti : FunctionComponent<InputTextMultiProps> = ({
                                                                 name,
                                                                 value= [""],
                                                                 editable = false,
                                                                 label,
                                                                 placeholder = '...',
                                                                 onChange,
                                                                 validator = null,
                                                                     fieldsNumber = 5
                                                             }) => {


    const onChangeHandler = (e :  InputTextEvent, index:number) =>{
        if (onChange){
            e.name = name
            const newValue = []
            const reverseValue = value.reverse()

            let isNotEmptyValue = false
            reverseValue.forEach((e) =>{
                if (!!e || isNotEmptyValue){
                    newValue.unshift(e)
                    if(!isNotEmptyValue) isNotEmptyValue = true
                }
            })
            newValue[index] = e.target.value
            e.value = newValue
            onChange(e)
        }
    }


    const getTextFields = () => {
        const textFieldsJSX: JSX.Element[] = []
        for (let i = 0; i < fieldsNumber; i++) {
            let isDisabled : boolean
            if (!value[0] && i!==0){
                isDisabled= true
            } else {
                isDisabled = i >= value.length+1
            }
            textFieldsJSX.push(<TextField onChange={(e) => {
                    onChangeHandler(e, i)
                }} placeholder={placeholder} value={value[i]} validator={validator} disabled={isDisabled} key={i} />
            )
        }
        return (<InputTextMultiFieldsContainer>
                {textFieldsJSX}
            </InputTextMultiFieldsContainer>)
    }

    return(
        <InputTextContainer>
            <InputTextMultiLabelContainer>
                <TextsForm>{label}</TextsForm>
            </InputTextMultiLabelContainer>
            {editable ?
                getTextFields() :
                (
                <InputTextMultiLabelContainer>
                    <TextsForm isValue>{value}</TextsForm>
                </InputTextMultiLabelContainer>
                )
            }
        </InputTextContainer>
    )
}

export default InputTextMulti