import {FunctionComponent, useMemo} from "react";
import {
    ListTileButtonsBackground,
    ListTileButtonsContainer,
    ListTileContainer, ListTileContent,
    ListTileHover,
    ListTileNotSelected,
    ListTileSecond, ListTileSelected, ListTileSelectedContent,
    ListTileTitle
} from "./list-tile.styles.ts";
import ListTileButton from "../buttons/list-tile-button/list-tile-button.component.tsx";
import {EDITOR_ICONS} from "../icons/editor-icon/editor-icon-list.component.tsx";


type ListTileProps = {
    title : string
    subtitles ?: string[]
    isSelected ?: boolean

}

const ListTile:FunctionComponent<ListTileProps> =({title, subtitles, isSelected}) =>{

    const [subtitle1 , subtitle2] = useMemo(()=>(subtitles && subtitles.length>1 ? subtitles : ["...","..."]),[subtitles])

    const onClickCreate = () =>{

    }

    const onClickRemove = () =>{

    }

    const getText = (
        <>
            <ListTileTitle>{title}</ListTileTitle>
            <ListTileSecond>{subtitle1}</ListTileSecond>
        <ListTileSecond>{subtitle2}</ListTileSecond>
        </>
    )

    return(
        <ListTileContainer>
            <ListTileNotSelected >
                <ListTileHover className="hover"/>
                <ListTileContent>
                    {getText}
                </ListTileContent>
            </ListTileNotSelected>

            <ListTileSelected style={{opacity : isSelected? 1 : 0}}>
                <ListTileSelectedContent>
                    {getText}
                </ListTileSelectedContent>
                <ListTileButtonsContainer>
                    <ListTileButtonsBackground>
                        <div>
                            <ListTileButton icon={EDITOR_ICONS.remove} onClick={onClickRemove} disabled={!isSelected}/>
                            <ListTileButton icon={EDITOR_ICONS.edit} onClick={onClickCreate} disabled={!isSelected}/>
                        </div>
                    </ListTileButtonsBackground>
                </ListTileButtonsContainer>
            </ListTileSelected>

        </ListTileContainer>
    )
}

export default ListTile
