import {CSSProperties, FunctionComponent, PropsWithChildren, useMemo, useState} from "react";
import {NavbarButtonDescription} from "../../organisms/navbar/navbar.list.tsx";
import {ModulesID} from "../../organisms/navbar/navbar.component.tsx";
import NavbarButton, {NavbarButtonEvent} from "../../atoms/buttons/navbar-button/navbar-button.component.tsx";
import {
    NavbarDesktopLeftContainer,
    NavbarDesktopMainContainer, NavbarDesktopRightContainer,

} from "./navbar-desktop.styles.ts";


type NavbarProps = PropsWithChildren<{
    buttonsList :  NavbarButtonDescription[],
    currentModulesId :  ModulesID,
    onChangeModulesId : (modulesID : ModulesID)=>void
}>

type BarStyleType = {simple: CSSProperties, duo:CSSProperties, hover: CSSProperties}

const leftBarStyle : BarStyleType  = {
    simple: {
        transform: "scale(.8) translateX(15%)",
        opacity: 1
    },
    duo: {
        transform: "scale(.4)",
        opacity: 1
    },
    hover: {
        transform: "scale(.6)"
    }
}

const rightBarStyle : BarStyleType  = {
    simple: {
        transform : 'scale(0)',
        opacity: 0    },
    duo: {
        transform: "scale(.6)",
        opacity: 1,
        display : "flex"
    },
    hover: {
        transform: "scale(.4)",
        display : "flex",
        opacity: 1,
    }
}

const NavbarDesktop:FunctionComponent<NavbarProps> = ({buttonsList,currentModulesId, onChangeModulesId}) =>{

    const secondBarList = useMemo(()=>buttonsList[currentModulesId.main].secondBar, [currentModulesId])
    const [hover, setHover] = useState(false);

    const onClickMainBarHandler = (e : NavbarButtonEvent) =>{
        if (e && e.moduleId !== undefined){
            onChangeModulesId({...currentModulesId, main : e.moduleId})
        }
    }

    return (
        <NavbarDesktopMainContainer>
            <NavbarDesktopLeftContainer
                onMouseEnter={()=>{
                    setHover(true);
                }}
                onMouseLeave={()=>{
                    setHover(false);
                }}
                style={{
                ...leftBarStyle.simple,
                    ...(secondBarList && !hover ? leftBarStyle.duo : null),
                    ...(secondBarList && hover? leftBarStyle.hover : null)
            }}>
                {buttonsList.map((e, i) =>
                    <NavbarButton onClick={onClickMainBarHandler}
                                  moduleId={i}
                                  icon={e.icon}
                                  iconHover={e.iconHover}
                                  text={e.text}
                                  link={e.link}
                                  selected={i === currentModulesId.main}
                                  key={i}/>
                )}
            </NavbarDesktopLeftContainer>

            <NavbarDesktopRightContainer
                style={{
                    ...rightBarStyle.simple,
                    ...(secondBarList && !hover ? rightBarStyle.duo : null),
                    ...(secondBarList && hover? rightBarStyle.hover : null)
                }}
            >
                {secondBarList && secondBarList.map((e, i) =>
                    <NavbarButton onClick={onClickMainBarHandler}
                                  moduleId={i}
                                  icon={e.icon}
                                  iconHover={e.iconHover}
                                  text={e.text}
                                  link={e.link}
                                  selected={i === currentModulesId.second}
                                  key={i}/>
                )}
            </NavbarDesktopRightContainer>
        </NavbarDesktopMainContainer>
    )
}

export default NavbarDesktop