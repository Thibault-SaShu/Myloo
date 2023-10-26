import styled from "styled-components";
import {mainColor, mainTransitionsDuration} from "../../../../styles/variables.styles.ts";
import {pileChildren} from "../../../../styles/mixins.styles.ts";

export const TopbarButtonContainer = styled.button`
    height: 100%;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
  ${pileChildren}
  
  &>*{
    height: 100%;
    width: 100%;
    border-radius: 50% ;
    padding: 20%;
    transition: opacity ${mainTransitionsDuration}s ease-in-out;
  }
  
  &:hover{
    &>*:first-child{
      opacity: 0;
    }
    &>*:last-child{
      opacity: 1;
    }
  }
`

export  const TopbarButtonMainLayer = styled.div`

  background-color: transparent;
  opacity: 1;

`



export  const TopbarButtonHoverLayer = styled.div`
  background-color: ${mainColor};
  opacity: 0;

`

export  const TopbarButtonSelectedLayer = styled.div`
  background-color: transparent;
  border: 2px solid ${mainColor};
`