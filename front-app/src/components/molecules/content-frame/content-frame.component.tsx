import {FunctionComponent} from "react";
import {ContentFrameContainer, ContentFrameTitle} from "./content-frame.styles.ts";
import InputText from "../../atoms/inputs/input-text/input-text.component.tsx";
import FormContent from "../../templates/form-content/form-content.component.tsx";
import InputTextMulti from "../../atoms/inputs/input-text-multi/input-text-multi.component.tsx";

type ContentFrameProps ={
    title : string,
    content : {[key: string]: string | string[]}
}


const ContentFrame : FunctionComponent <ContentFrameProps>= ({title, content}) =>{

    const getContent = (Object.keys(content).map( e =>(
        Array.isArray(content[e]) ? 
            <InputTextMulti name={e} label={e} value={content[e]}/> :
        <InputText name={e} label={e} value={content[e]}/>
)))

    return (
        <ContentFrameContainer>
            <ContentFrameTitle>{title}</ContentFrameTitle>
            <FormContent>
                {getContent}
            </FormContent>
        </ContentFrameContainer>
    )
}

export default ContentFrame
