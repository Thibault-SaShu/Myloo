import styled from "styled-components";
import {
    dropdownFrameShadow, mainTransitionsDuration,
    topBarHeight,
    windowFrameColor,
} from "../../../../styles/variables.styles.ts";


export const WindowDropdownFrame = styled.div`
  z-index: 10;
  position: absolute;
  top : 0;
  right: 0;
  background-color: ${windowFrameColor};
  width:15rem;
  margin: 1rem;
  margin-top: ${topBarHeight};

  padding: .8rem;
  border-radius: .8rem;
  display: flex;
  flex-direction: column;
  box-shadow: ${dropdownFrameShadow};
  
  transform-origin: 0 0;
  transform: rotateX(90deg) ;
  opacity: 0;
  transition: transform ${mainTransitionsDuration/2}s ease-in-out, opacity ${mainTransitionsDuration/2}s ease-in-out;
  
  &>*{
    width: 100%;
    height: 2rem;

  }
`
