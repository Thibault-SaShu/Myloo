import {
    NavbarButtonContainer,
    NavbarButtonLogo,
    NavbarButtonSelector,
    NavbarButtonText
} from "./navbar-button.styles.ts";
import {FormEvent, FunctionComponent, PropsWithChildren} from "react";


type BtnProps = PropsWithChildren<{
    onClick : Function
    moduleId : number
    icon:string
    iconHover:string
    text: string,
    link : string,
}>

export interface NavbarButtonEvent extends FormEvent<HTMLButtonElement> {
    moduleId ?: number
}

const NavbarButton :FunctionComponent<BtnProps> = ({onClick, moduleId, icon, iconHover, text, link

                                                   }) =>{

    const onClickHandler = (e:NavbarButtonEvent)  =>{
        e.preventDefault()
        e.moduleId = moduleId
        onClick(e)
    }

    return (
        <NavbarButtonContainer onClick={onClickHandler}>
            <NavbarButtonLogo>
                <img src={icon}/>
                <img src={iconHover}/>
            </NavbarButtonLogo>
            <NavbarButtonText>
                <h3>{text}</h3>
            </NavbarButtonText>
        </NavbarButtonContainer>
    )
}

export default NavbarButton