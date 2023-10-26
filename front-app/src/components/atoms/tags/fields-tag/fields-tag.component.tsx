import {FunctionComponent} from "react";
import {FieldTagCircleNegative, FieldTagCirclePositive, FieldTagContainer, FieldTagText} from "./fields-tag.styles.ts";

export type ValidatorUpdateReturnFunction =  (isValidate : boolean)=>void

type FieldsTagProps = {
    isValid ?: boolean | null,
    text ?: string | null,
    isVisible ?: boolean
}

const FieldsTag : FunctionComponent<FieldsTagProps> = ({isValid = true, text= "-", isVisible=false}) =>{

    return(
        <FieldTagContainer style={{opacity : isVisible?1:0}}>
            <FieldTagCirclePositive/>
            <FieldTagCircleNegative style={{opacity : isValid ? 0 : 1}}/>
            <FieldTagText>{text}</FieldTagText>
        </FieldTagContainer>
    )
}

export default  FieldsTag

