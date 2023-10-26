import NavbarDesktopComponent from "../../molecules/navbar-desktop/navbar-desktop.component.tsx";
import {navbarButtonsList} from "./navbar.list.tsx";
import useMediaQuery, {QUERY_BREAKPOINTS} from "../../../hooks/useMediaQuery.tsx";
import NavbarMobile from "../../molecules/navbar-mobile/navbar-mobile.component.tsx";
import {useState} from "react";

export type ModulesID = {
    main : number,
    second : number
}

const Navbar = () =>{

    const [currentModuleId, setCurrentModuleId] = useState<ModulesID>({main: 0 , second: 0})
    const isTabletOrDesktop = useMediaQuery(QUERY_BREAKPOINTS.tabletBreakpoint)

    const onChangeModuleId = (modulesId : ModulesID) =>{
        setCurrentModuleId(modulesId)
    }

    return (
        <>
            {isTabletOrDesktop ?
                <NavbarMobile buttonsList={navbarButtonsList}/> :
                <NavbarDesktopComponent buttonsList={navbarButtonsList} currentModulesId={currentModuleId} onChangeModulesId={onChangeModuleId}/>}
        </>
    )
}

export default Navbar

//  isTabletOrDesktop ? <NavbarDesktopComponent buttonsList={navbarButtonsList}/>