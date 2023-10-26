import {pileChildren} from "../../../../styles/mixins.styles.ts";
import styled from "styled-components";
import {listButtonTxt} from "../../../../styles/fonts-template.styles.ts";
import {hoverColor, mainTransitionsDuration} from "../../../../styles/variables.styles.ts";

export const ListButtonListContainer = styled.button`
  ${pileChildren}
  &>*{
    width: 100%;
    height: 100%;
    border-radius: 1rem ;
  }

  &:hover{
    &>.hover{
      opacity: 1;

    }
  }
  
`

export const ListButtonHover = styled.div`
  background-color: ${hoverColor};
  opacity: 0;
  transition: opacity ${mainTransitionsDuration*0.8}s ease-in-out;
  
 
`

export const ListButtonSelected = styled.div`
  background-color: #C21F39;
`

export const ListButtonText = styled.h5`
${listButtonTxt};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 6;
`