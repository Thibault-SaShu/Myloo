import {FunctionComponent, PropsWithChildren, useState} from "react";
import {NavbarButtonDescription} from "../../organisms/navbar/navbar.list.tsx";
import {NavbarMobileContainer, NavbarMobileMain, NavbarMobileSecond} from "./navbar-mobile.styles.ts";
import NavbarButton, {NavbarButtonEvent} from "../../atoms/buttons/navbar-button/navbar-button.component.tsx";

type NavbarProps = PropsWithChildren<{
    buttonsList :  NavbarButtonDescription[]
}>

const NavbarMobile :FunctionComponent<NavbarProps> = ({buttonsList}) =>{

    const [currentModuleId, setCurrentModuleId] = useState<number>(0)
    const secondBarList = buttonsList[currentModuleId].secondBar

    const onClickHandler = (e : NavbarButtonEvent) =>{
        setCurrentModuleId(e.moduleId ?? currentModuleId)
    }

    return (
        <NavbarMobileContainer>
            <NavbarMobileMain>
                {buttonsList.map((e, i) =>
                    <NavbarButton onClick={onClickHandler}
                                  moduleId={i}
                                  icon={e.icon}
                                  iconHover={e.iconHover}
                                  text={e.text}
                                  link={e.link}
                                  key={i}/>
                )}
            </NavbarMobileMain>
            <NavbarMobileSecond>
                {secondBarList && secondBarList.map((e, i) =>
                    <NavbarButton onClick={onClickHandler}
                                  moduleId={i}
                                  icon={e.icon}
                                  iconHover={e.iconHover}
                                  text={e.text}
                                  link={e.link}
                                  key={i}/>
                )}
            </NavbarMobileSecond>
        </NavbarMobileContainer>
    )

}

export default NavbarMobile