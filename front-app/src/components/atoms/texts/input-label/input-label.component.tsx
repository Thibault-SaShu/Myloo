import {FunctionComponent, PropsWithChildren} from "react";
import {
    TextsFormLabelContainer,
    TextsFormLabelTxt, TextsFormValueContainer,
    TextsFormValueTxt
} from "./input-label.styles.ts";

type InputTextProps = PropsWithChildren<{
    isValue ?: boolean
}>



const TextsForm : FunctionComponent<InputTextProps> = ({isValue = false, children}) => {

    return isValue?
        (
            <TextsFormValueContainer>
                <TextsFormValueTxt>{`:  ${children}`}</TextsFormValueTxt>
            </TextsFormValueContainer>
        )
        :(
            <TextsFormLabelContainer>
                <TextsFormLabelTxt>{children}</TextsFormLabelTxt>
            </TextsFormLabelContainer>
        )

}

export default TextsForm