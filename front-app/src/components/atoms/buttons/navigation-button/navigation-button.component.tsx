import {FunctionComponent, useCallback} from "react";
import {
    NavigationButtonBackgroundMain, NavigationButtonBackgroundSecondary,
    NavigationButtonContainer, NavigationButtonHover,
    NavigationButtonIcon
} from "./navigation-button.styles.ts";
import { mainColor, windowFrameColor} from "../../../../styles/variables.styles.ts";
import getNavigationIcon, {NAVIGATION_ICONS} from "../../icons/navigation-icons/navigation-icons.list.tsx";

export enum NAVIGATION_BUTTON_STYLE  {
    primary,
    secondary
}

export type NavigationButtonProps = {
    type ?: NAVIGATION_BUTTON_STYLE
    icon ?: NAVIGATION_ICONS
    onClick : ()=>void
}


const NavigationButton :FunctionComponent<NavigationButtonProps>= ({type = NAVIGATION_BUTTON_STYLE.secondary, icon = NAVIGATION_ICONS.validate, onClick}) =>{

    const getBackground = useCallback(() =>{
        switch (type) {
            case NAVIGATION_BUTTON_STYLE.primary:
                return <NavigationButtonBackgroundMain className="bg"/>
            case NAVIGATION_BUTTON_STYLE.secondary:
                return <NavigationButtonBackgroundSecondary className="bg"/>
        }
    },[type])

    const getIcon = useCallback(() =>{
        switch (type) {
            case NAVIGATION_BUTTON_STYLE.primary:
                return getNavigationIcon( icon, windowFrameColor)
            case NAVIGATION_BUTTON_STYLE.secondary:
                return getNavigationIcon( icon, mainColor)
        }
    },[type])

    return (
        <NavigationButtonContainer>
            {getBackground()}
            <NavigationButtonHover className="hover"/>
            <NavigationButtonIcon onClick={onClick}>
                {getIcon()}
            </NavigationButtonIcon>
        </NavigationButtonContainer>)
}

export default NavigationButton