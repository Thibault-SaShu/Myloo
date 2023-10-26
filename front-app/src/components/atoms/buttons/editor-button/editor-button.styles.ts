import styled from "styled-components";
import {
  backgroundColor,
  editorButtonHeight,
  hoverColor,
  mainColor, mainTransitionsDuration,
  windowFrameColor
} from "../../../../styles/variables.styles.ts";
import {pileChildren} from "../../../../styles/mixins.styles.ts";
import {editorButtonTxt, listButtonTxt} from "../../../../styles/fonts-template.styles.ts";

export const EditorButtonContainer = styled.button`
  height: ${editorButtonHeight};
  gap: .7rem;
  max-width: 20rem;
  ${pileChildren};
  
  &>*{
    width: 100%;
    height: 100%;
    border-radius: 1rem;
  }
  
  &:hover{
    &>.hover{
      opacity: 1;
    }
  }
`

export const EditorButtonContent = styled.div`
  z-index: 3;
  padding: 0 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .5rem;
`

export const EditorButtonBg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

`

export const EditorButtonPrimary = styled(EditorButtonBg)`
  background-color: ${mainColor};
`

export const EditorButtonSecondary = styled(EditorButtonBg)`
  border: 1px solid ${mainColor};
`

export const EditorButtonHover = styled.div`
  z-index: 2;
  opacity: 0;
  background-color: ${hoverColor};
  transition: opacity ${mainTransitionsDuration/2}s ease-in-out;
  
`

export const EditorButtonIcon = styled.div`
  height: 70%;
  aspect-ratio: 1/1;

`

export const EditorButtonText = styled.h5`
  ${editorButtonTxt};
  
`

export const EditorButtonPrimaryText = styled(EditorButtonText)`
  color: ${windowFrameColor};

`

export const EditorButtonSecondaryText = styled(EditorButtonText)`
  color: ${mainColor};

`

