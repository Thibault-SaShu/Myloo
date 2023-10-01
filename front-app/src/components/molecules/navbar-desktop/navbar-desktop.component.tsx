import {NavbarLeftContainer, NavbarMainContainer, NavbarRightContainer} from "./navbar.styles.ts";
import NavbarButton, {NavbarButtonEvent} from "../../atoms/buttons/navbar-button/navbar-button.component.tsx";
import {CSSProperties, FunctionComponent, PropsWithChildren, useEffect, useRef, useState} from "react";
import {NavbarButtonDescription} from "../../organisms/navbar/navbar.list.tsx";

enum NAVBAR_STATUS {
    single,
    left,
    right
}

type navbarStyleObject = () => {
    left : CSSProperties,
    right : CSSProperties
}

type NavbarProps = PropsWithChildren<{
    buttonsList :  NavbarButtonDescription[]

}>

const fullNavbarStyle : CSSProperties = {
    transform : 'scale(1)',
    display : "flex"
}

const smallNavbarStyle : CSSProperties = {
    transform : 'scale(0.4)',
    display : "flex"
}

const bigNavbarStyle : CSSProperties = {
    transform : 'scale(0.6' +
        ')',
    display : "flex"
}

const noNavbarStyle : CSSProperties = {
    transform : 'scale(0)',
    display : "none"
}



const NavbarDesktop:FunctionComponent<NavbarProps> = ({buttonsList}) =>{

    const [navbarStatus, setNavbarStatus] = useState<NAVBAR_STATUS>(NAVBAR_STATUS.single)
    const [currentModuleId, setCurrentModuleId] = useState<number>(0)

    const leftRef = useRef<null | HTMLDivElement>(null);
    const rightRef = useRef<null | HTMLDivElement>(null);

    const getNavbarStyles : navbarStyleObject = () =>{
       switch (navbarStatus){
           case NAVBAR_STATUS.single :
               return {left: fullNavbarStyle, right: noNavbarStyle}
           case NAVBAR_STATUS.right :
               return {left: smallNavbarStyle, right: bigNavbarStyle}
           default:
               return {left: bigNavbarStyle, right: smallNavbarStyle}
       }
    }

    console.log("Rerender")
    const secondBarList = buttonsList[currentModuleId].secondBar

    const onClickHandler = (e : NavbarButtonEvent) =>{
        setCurrentModuleId(e.moduleId ?? currentModuleId)
    }

    useEffect (()=>{

        if (navbarStatus !== NAVBAR_STATUS.single){
            const handleOverLeft = () => {
                    setNavbarStatus(NAVBAR_STATUS.left)
            };

            const handleOverRight = () => {
                    setNavbarStatus(NAVBAR_STATUS.right)
            };

            leftRef.current?.addEventListener("mouseover",handleOverLeft )
            rightRef.current?.addEventListener("mouseover",handleOverRight )

            return ()=>{
                leftRef.current?.removeEventListener("mouseover",handleOverLeft )
                rightRef.current?.removeEventListener("mouseover",handleOverRight )
            }

        }
    },[navbarStatus])

    useEffect(()=>{
        if (secondBarList){
            setNavbarStatus(NAVBAR_STATUS.left)
        } else {
            setNavbarStatus(NAVBAR_STATUS.single)
        }

    },[currentModuleId])

    return (
        <NavbarMainContainer>
            <NavbarLeftContainer style={getNavbarStyles().left} ref={leftRef}>
                {buttonsList.map((e, i) =>
                    <NavbarButton onClick={onClickHandler}
                                  moduleId={i}
                                  icon={e.icon}
                                  iconHover={e.iconHover}
                                  text={e.text}
                                  link={e.link}
                                  key={i}/>
                )}
            </NavbarLeftContainer>


            <NavbarRightContainer style={getNavbarStyles().right} ref={rightRef}>
                {secondBarList && secondBarList.map((e, i) =>
                    <NavbarButton onClick={onClickHandler}
                                  moduleId={i}
                                  icon={e.icon}
                                  iconHover={e.iconHover}
                                  text={e.text}
                                  link={e.link}
                                  key={i}/>
                )}
            </NavbarRightContainer>

        </NavbarMainContainer>
    )
}

export default NavbarDesktop