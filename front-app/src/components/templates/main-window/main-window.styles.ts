import styled from "styled-components";
import {
  mainTransitionsDuration,
  tabletMediaQuery,
  windowFrameColor,
  windowFrameShadow
} from "../../../styles/variables.styles.ts";
import {fixedInAllPage, verticalScrollBar} from "../../../styles/mixins.styles.ts";
import {windowPrimaryTitle, windowSecondaryTitle} from "../../../styles/fonts-template.styles.ts";

export const MainWindowContainer = styled.div`
${fixedInAllPage};
  z-index: 10;
  pointer-events: none;  
  display: flex;
  justify-content: center;
  align-items: center;
  &>*{
    pointer-events: auto;
  }
`

export const MainWindowFrame = styled.div`
  background-color: ${windowFrameColor};
  box-shadow: ${windowFrameShadow};
  width: 55rem;
  max-width: 90%;
  max-height: 90%;
  padding: 1.2rem 2rem 1.2rem 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  transform: rotateX(-90deg);
  opacity: 0;
  transition:
      transform ${mainTransitionsDuration}s ease-in-out,
      opacity ${mainTransitionsDuration}s ease-in-out;
  &>*{
    width: 100%;
  }
`

export const MainWindowNavigationBar = styled.div`
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
`

export const MainWindowTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const MainWindowTopBarTitlesContainer= styled.div`
  display: inline-block;
  &>*{
    display: inline-block;
    margin: 0;
    width: auto;
  }
`

export const MainWindowTopBarButtonsContainer = styled.div`
  display: flex;
  gap: .5rem;
`

export const MainWindowPrimaryTitle = styled.h2`
  ${windowPrimaryTitle}
`

export const MainWindowSecondaryTitle = styled.h3`
  ${windowSecondaryTitle};
  margin-left: 0.3rem;
`
