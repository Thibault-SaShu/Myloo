import {css} from "styled-components";
import {QUERY_BREAKPOINTS} from "../hooks/useMediaQuery.tsx";

/*Main variables*/
export const mainTransitionsDuration = .5

/*Colors*/
export const mainColor = "#2b2725"
export const backgroundColor = "#d0d0d0"
export const windowBackgroundColor = "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,.3) 100%)"

export const inputGradient = "inset 0px 0px 5px 1px rgba(0,0,0,.05);"


/*Navbar*/
export const navbarWidth = "7rem";
export const navbarTabletWidth = "10rem";
export const navbarMobileWidth = "10rem";

/*Windows*/
export const windowFrameColor = "#ffffff"
export const dropdownFrameShadow = "rgba(0, 0, 0, 0.15) 0px 7px 14px, rgba(0, 0, 0, 0.12) 0px 5px 5px"

export const windowFrameShadow = "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
export const hoverColor = "#b7b3ad"

/*Form color */
export const inputColor =  "#e8e8e8"

export const placeholderTextColor = "#b7b3ad"
export const positiveColor ="#789394";
export const negativeColor ="#e55e68";

/*Content color*/
export const contentFramesShadow = "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;"


/*Top bar*/
export const topBarHeight = "3.2rem";

export const listWith = "30rem";

export const editorButtonHeight = "1.8rem";

/*ListBar*/
export const searchInputHeight = "1.8rem"


/*Form*/
export const formsHeight = "1.4rem"


/*Media */
// QUERY_BREAKPOINTS enum is in the hook useMediaQuery.tsx
export const tabletMediaQuery = css `@media screen and (max-width: ${QUERY_BREAKPOINTS.tabletBreakpoint}px)`
export const phoneMediaQuery = css `@media screen  and (max-width: ${QUERY_BREAKPOINTS.mobileBreakpoint}px)`