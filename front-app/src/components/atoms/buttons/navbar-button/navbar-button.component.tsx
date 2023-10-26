import {
    NavbarButtonContainer, NavbarButtonContent,
    NavbarButtonLogo, NavbarButtonSelector,
    NavbarButtonText
} from "./navbar-button.styles.ts";
import {FormEvent, FunctionComponent, PropsWithChildren} from "react";
import {backgroundColor, mainColor} from "../../../../styles/variables.styles.ts";
import getNavbarIcon, {NAVBAR_ICONS} from "../../icons/navbar-icons/navbar-icons.list.tsx";

type BtnProps = PropsWithChildren<{
    onClick : Function
    moduleId : number
    icon:NAVBAR_ICONS
    iconHover:NAVBAR_ICONS
    text: string,
    link : string,
    selected ?: boolean
}>

export interface NavbarButtonEvent extends FormEvent<HTMLButtonElement> {
    moduleId ?: number
}

const NavbarButton :FunctionComponent<BtnProps> = ({onClick, moduleId, icon, iconHover, text, link, selected=false}) =>{

    const onClickHandler = (e:NavbarButtonEvent)  =>{
        e.preventDefault()
        e.moduleId = moduleId
        console.log(link)
        onClick(e)
    }

    const getIconColor = () => selected ? backgroundColor : mainColor

    return (
        <NavbarButtonContainer onClick={onClickHandler}>
            {selected && <NavbarButtonSelector/>}

            <NavbarButtonContent>
                <NavbarButtonLogo>
                    {getNavbarIcon(icon, selected ? backgroundColor : mainColor)}
                    {getNavbarIcon(iconHover, selected ? backgroundColor : mainColor)}
                </NavbarButtonLogo>
                <NavbarButtonText>
                    <h3 style={{color: getIconColor()}}>{text}</h3>
                </NavbarButtonText>

            </NavbarButtonContent>

        </NavbarButtonContainer>
    )
}

export default NavbarButton