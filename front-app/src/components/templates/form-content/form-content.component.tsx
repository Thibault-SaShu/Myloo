import {FunctionComponent, PropsWithChildren} from "react";
import {NAVBAR_ICONS} from "../../atoms/icons/navbar-icons/navbar-icons.list.tsx";
import {FormContentContainer} from "./form-content.styles.ts";

type BtnProps = PropsWithChildren<{
    onClick : Function
    moduleId : number
    icon:NAVBAR_ICONS
    iconHover:NAVBAR_ICONS
    text: string,
    link : string,
    selected ?: boolean
}>


const FormContent : FunctionComponent <PropsWithChildren> = ({children}) =>(
    <FormContentContainer>
        {children}
    </FormContentContainer>
)

export default FormContent