import {FunctionComponent, ReactNode} from "react";

type NavigationIconsType = {
    color : string
}

export enum NAVIGATION_ICONS{
    preview,
    next,
    cancel,
    validate
}

type GetNavigationIconType = (icon: NAVIGATION_ICONS, color: string) => ReactNode

/**
 *Function to create a React element icon for the navigation buttons
 * @param icon  the icon you want in the TOPBAR_ICONS enum
 * @param color color to apply on the icon
 * @return to integer in the JSX
 */
const getNavigationIcon : GetNavigationIconType= (icon, color) =>(
    {
        [NAVIGATION_ICONS.cancel] : CancelNavigationIcons({color}),
        [NAVIGATION_ICONS.next] : NextNavigationIcons({color}),
        [NAVIGATION_ICONS.validate] : ValidateNavigationIcons({color}),
        [NAVIGATION_ICONS.preview] : PreviousNavigationIcons({color})
    }[icon])

export default getNavigationIcon

const PreviousNavigationIcons :FunctionComponent<NavigationIconsType>= ({color}) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_162_1035)">
                <path d="M12 22.9817L1.02109 12" stroke={color} strokeMiterlimit="10" strokeLinecap="round" />
                <path d="M1.02109 12L12 1.02109" stroke={color} strokeMiterlimit="10" strokeLinecap="round"/>
                <path d="M1.02109 12L22.9817 12" stroke={color} strokeMiterlimit="10" strokeLinecap="round"/>
            </g>

        </svg>
    )


const NextNavigationIcons :FunctionComponent<NavigationIconsType>= ({color}) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_161_985)">
                <path d="M12 1.01831L22.9789 12" stroke={color} strokeMiterlimit="10" strokeLinecap="round"/>
                <path d="M22.9789 12L12 22.9789" stroke={color} strokeMiterlimit="10" strokeLinecap="round"/>
                <path d="M22.9789 12H1.01831" stroke={color} strokeMiterlimit="10" strokeLinecap="round"/>
            </g>
        </svg>
    )


const ValidateNavigationIcons :FunctionComponent<NavigationIconsType>= ({color}) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_161_982)">
                <path d="M22.5888 1.41119L8.46948 22.5888" stroke={color} strokeMiterlimit="10" strokeLinecap="round"/>
                <path d="M8.46965 22.5888L1.41138 12" stroke={color} strokeMiterlimit="10" strokeLinecap="round"/>
            </g>
        </svg>
)

const CancelNavigationIcons :FunctionComponent<NavigationIconsType>= ({color}) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_162_1034)">
                <path d="M22.5883 1.41174L1.41187 22.5882" stroke={color} strokeMiterlimit="10" strokeLinecap="round"/>
                <path d="M22.5883 22.5882L1.41187 1.41174" stroke={color} strokeMiterlimit="10" strokeLinecap="round"/>
            </g>
        </svg>
)


