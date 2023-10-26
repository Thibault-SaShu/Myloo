import {FunctionComponent} from "react";
import {
    EditorButtonContainer,
    EditorButtonContent, EditorButtonHover, EditorButtonIcon,
    EditorButtonPrimary, EditorButtonPrimaryText,
    EditorButtonSecondary, EditorButtonSecondaryText
} from "./editor-button.styles.ts";
import { mainColor, windowFrameColor} from "../../../../styles/variables.styles.ts";
import getEditorIcon, {EDITOR_ICONS} from "../../icons/editor-icon/editor-icon-list.component.tsx";

export enum EDITOR_BUTTON_STYLE {
    primary,
    secondary
}

export type EditorButtonProps = {
    type ?: EDITOR_BUTTON_STYLE
    icon ?: EDITOR_ICONS
    text ?: string
    onClick : ()=>void
}

const EditorButton :FunctionComponent<EditorButtonProps> = ({
                                                                type = EDITOR_BUTTON_STYLE.secondary,
                                                                icon = EDITOR_ICONS.create,
                                                                text = "...",
                                                                onClick}) => {
    return (
        <EditorButtonContainer onClick={onClick}>
            {
                type === EDITOR_BUTTON_STYLE.primary ?
                    <EditorButtonPrimary className="bg"/>
                    : <EditorButtonSecondary className="bg"/>
            }
            <EditorButtonHover className="hover"/>
            <EditorButtonContent>
                <EditorButtonIcon>
                    {getEditorIcon(icon, EDITOR_BUTTON_STYLE.primary ? windowFrameColor : mainColor)}
                </EditorButtonIcon>
                {
                    type === EDITOR_BUTTON_STYLE.primary ?
                    <EditorButtonPrimaryText>{text}</EditorButtonPrimaryText>
                        : <EditorButtonSecondaryText>{text}</EditorButtonSecondaryText>
                }
            </EditorButtonContent>
        </EditorButtonContainer>
    )
}

export default EditorButton
