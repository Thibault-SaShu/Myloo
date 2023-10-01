import NavbarDesktopComponent from "../../molecules/navbar-desktop/navbar-desktop.component.tsx";
import {navbarButtonsList} from "./navbar.list.tsx";

const Navbar = () =>{
    return (
        <>
            <NavbarDesktopComponent buttonsList={navbarButtonsList}/>
        </>
    )
}

export default Navbar