import {
    DesktopTemplateContainer, DesktopTemplateContent,
    DesktopTemplateList, DesktopTemplateListAndContent,
    DesktopTemplateMain,
    DesktopTemplateNavbar, DesktopTemplateTopBar
} from "./desktop-template.styles.tsx";
 import Navbar from "../../organisms/navbar/navbar.component.tsx";

const DesktopTemplate = () =>{
    return(
        <DesktopTemplateContainer>
            <DesktopTemplateNavbar>
                <Navbar/>
            </DesktopTemplateNavbar>

            <DesktopTemplateMain>

                <DesktopTemplateTopBar>

                </DesktopTemplateTopBar>

                <DesktopTemplateListAndContent>
                    <DesktopTemplateList>

                    </DesktopTemplateList>
                    <DesktopTemplateContent>

                    </DesktopTemplateContent>
                </DesktopTemplateListAndContent>

            </DesktopTemplateMain>
        </DesktopTemplateContainer>
    )
}

export default DesktopTemplate