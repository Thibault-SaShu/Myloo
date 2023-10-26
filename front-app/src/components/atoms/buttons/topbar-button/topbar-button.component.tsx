import {FunctionComponent} from "react";
import {TopbarButtonContainer, TopbarButtonHoverLayer, TopbarButtonMainLayer} from "./topbar-button.styles.tsx";
import {backgroundColor, mainColor} from "../../../../styles/variables.styles.ts";
import {NavbarButtonEvent} from "../navbar-button/navbar-button.component.tsx";
import getTopbarIcon, {TOPBAR_ICONS} from "../../icons/topbar-icon/topbar-icons.list.tsx";

type topbarBtnProps = {
    onClick : Function
    icon:TOPBAR_ICONS

}

const TopbarButton:FunctionComponent<topbarBtnProps> = ({onClick, icon}) =>{

    const onClickHandler = (e:NavbarButtonEvent)  =>{
        e.preventDefault()
        onClick(e)
    }

    return (
        <TopbarButtonContainer onClick={onClickHandler}>
            <TopbarButtonMainLayer>
                {getTopbarIcon(icon, mainColor)}
            </TopbarButtonMainLayer>
            <TopbarButtonHoverLayer>
                {getTopbarIcon(icon, backgroundColor)}
            </TopbarButtonHoverLayer>
        </TopbarButtonContainer>
    )
}

export default TopbarButton