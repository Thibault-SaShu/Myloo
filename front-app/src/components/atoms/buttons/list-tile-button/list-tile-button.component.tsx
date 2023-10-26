import {FunctionComponent, MouseEventHandler} from "react";
import getEditorIcon, {EDITOR_ICONS} from "../../icons/editor-icon/editor-icon-list.component.tsx";
import {TileButtonContainer, TileButtonHoverIcon, TileButtonIcon} from "./list-tile-button.styles.ts";
import {backgroundColor, mainColor} from "../../../../styles/variables.styles.ts";

type TypeButtonProps = {
    icon : EDITOR_ICONS,
    onClick : MouseEventHandler<HTMLButtonElement>
    disabled ?: boolean
}

const ListTileButton : FunctionComponent<TypeButtonProps> = ({icon, onClick, disabled=false}) =>(
    <TileButtonContainer onClick={onClick} disabled={disabled}>
        <TileButtonIcon>
            {getEditorIcon(icon, backgroundColor)}
        </TileButtonIcon>
        <TileButtonHoverIcon className="hover">
            {getEditorIcon(icon, mainColor)}
        </TileButtonHoverIcon>
    </TileButtonContainer>
)

export default ListTileButton