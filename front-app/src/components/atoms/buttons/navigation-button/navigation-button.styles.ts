import styled from "styled-components";
import {hoverColor, mainColor, mainTransitionsDuration} from "../../../../styles/variables.styles.ts";
import {pileChildren} from "../../../../styles/mixins.styles.ts";

export const NavigationButtonContainer = styled.button`
  height: 100%;
  aspect-ratio: 1/1;
  ${pileChildren};
  &>*{
    border-radius: 50%;
    height: 100%;
    width: 100%;
  }   
  
  &:hover{
    &>.hover{
      transform: scale(1.1);
      opacity: 1;
    }
  }
`

export const NavigationButtonIcon = styled.div`
    padding: .6rem;
    z-index: 5;
`

const NavigationButtonBackground = styled.div`
  opacity: 1;
  z-index: 2;
  transition: opacity ${mainTransitionsDuration}s ease-in-out

`

export const NavigationButtonBackgroundSecondary = styled(NavigationButtonBackground)`
  border: 1px solid ${mainColor} ;
`

export const NavigationButtonBackgroundMain = styled(NavigationButtonBackground)`
  background-color: ${mainColor} ;
`

export const NavigationButtonHover = styled.div`
  z-index: 3;
  opacity: 0;
  background-color: ${hoverColor};
  transform: scale(0);
  transition: opacity ${mainTransitionsDuration*0.5}s ease-in-out, transform ${mainTransitionsDuration*0.5}s ease-in-out
;
`

