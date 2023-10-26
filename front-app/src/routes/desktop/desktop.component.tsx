import {
    DesktopContainer,
    DesktopListAndContent,
    DesktopMain,
    DesktopNavbar,
    DesktopTopBar
} from "./desktop.styles.tsx";
import Navbar from "../../components/organisms/navbar/navbar.component.tsx";
import Topbar from "../../components/organisms/topbar/topbar.component.tsx";
import {Outlet} from "react-router-dom";
import {FunctionComponent} from "react";

const DesktopTemplate :FunctionComponent = () =>{

    return(
        <DesktopContainer>

            <DesktopNavbar>
                <Navbar/>
            </DesktopNavbar>

            <DesktopMain>

                <DesktopTopBar>
                    <Topbar/>
                </DesktopTopBar>

                <DesktopListAndContent>
                    <Outlet/>
                </DesktopListAndContent>

            </DesktopMain>
        </DesktopContainer>
    )
}

export default DesktopTemplate