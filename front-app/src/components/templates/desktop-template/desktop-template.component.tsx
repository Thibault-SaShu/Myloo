import {
    DesktopTemplateContainer,
    DesktopTemplateContentContainer,
    DesktopTemplateListContainer, DesktopTemplatelistSearchContainer,
    DesktopTemplatelistTilesContainer
} from "./desktop-template.styles.ts";
import SearchField from "../../atoms/fields/search-field/search-field.component.tsx";
import {FunctionComponent, useState} from "react";
import Switch, {SwitchButtonEvent} from "../../atoms/switch/switch.component.tsx";
import ListTile from "../../atoms/list-tile/list-tile.component.tsx";
import ContentDisplay from "../../organisms/content-diplay/content-display.component.tsx";


type TileListType = {
    title : string,
    subtitles ?: string[]
}
const temporyListData: TileListType[] = [
    {title: "MITSUBISHI Corporation, odštěpný závod", subtitles : ["Jeremenkova 763/88 - Praha", "CZ07576013"]},
    {title: "MITSUBISHI Corporation, odštěpný závod", subtitles : ["Jeremenkova 763/88 - Praha", "CZ07576013"]},
    {title: "MITSUBISHI Corporation, odštěpný závod", subtitles : ["Jeremenkova 763/88 - Praha", "CZ07576013"]}

]


const DesktopTemplate :FunctionComponent =() =>{

    const [switchPosition, setSwitchPosition] = useState<number>(0)

    const onSwitchOne = (e : SwitchButtonEvent) =>{
        if (e.position !== undefined){
            console.log(e.name)
            console.log(e.position)
            setSwitchPosition(e.position)
        }
    }


    return(
        <DesktopTemplateContainer>
        <DesktopTemplateListContainer>
            <DesktopTemplatelistSearchContainer>
                <SearchField/>
                <Switch name={"test"} labels={["label 1", "label 2", "label 3"]} onClick={onSwitchOne} position={switchPosition}/>
            </DesktopTemplatelistSearchContainer>

            <DesktopTemplatelistTilesContainer>
                {temporyListData.map((e, i) =>
                    <ListTile title={e.title} subtitles={e.subtitles}  key={i}/>
                )}
                <ListTile title="SaShu for retail" subtitles={["Jeremenkova 763/88 - Praha", "CZ07576013"]} isSelected={true}/>
            </DesktopTemplatelistTilesContainer>
        </DesktopTemplateListContainer>
            <DesktopTemplateContentContainer>
                <ContentDisplay/>
            </DesktopTemplateContentContainer>
        </DesktopTemplateContainer>

    )
}

export default DesktopTemplate