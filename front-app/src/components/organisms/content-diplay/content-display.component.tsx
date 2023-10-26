import {FunctionComponent} from "react";
import {
    ContentDisplayContentContainer,
    ContentDisplayMainContainer,
    ContentDisplayTitleContainer,
    ContentDisplayTitlePrimary, ContentDisplayTitleSecondary
} from "./content-display.styles.ts";
import ContentFrame from "../../molecules/content-frame/content-frame.component.tsx";

type ContentType ={
    form : {[key: string]: string | string[]},

}
const temporyPageData: ContentType = {
    form : {
        name : "SaShu for Retail",
        email : "thibault@sa-shu.com",
        phone : ["000 000 000", "111 111 111"],
        address : ["Pernerova 18", "Karlin"],
        zip: "186 00",
        city: "Praha"
    }
}

const ContentDisplay : FunctionComponent = () =>{
    return (
        <ContentDisplayMainContainer>
            <ContentDisplayTitleContainer>
                <ContentDisplayTitlePrimary>Petr Dupond</ContentDisplayTitlePrimary>
                <ContentDisplayTitleSecondary>CL 501254</ContentDisplayTitleSecondary>
            </ContentDisplayTitleContainer>

            <ContentDisplayContentContainer>
                <ContentFrame title="Informations" content={temporyPageData.form}/>
            </ContentDisplayContentContainer>

        </ContentDisplayMainContainer>
    )
}


export default ContentDisplay