import styled from "styled-components";
import {pileChildren} from "../../../../styles/mixins.styles.ts";
import {backgroundColor, mainTransitionsDuration} from "../../../../styles/variables.styles.ts";

export const TileButtonContainer = styled.button`
  height: 3rem;
  width: 3rem;
  padding: .2rem;
  ${pileChildren};
  &>*{
    padding: .6rem;
    border-radius: 1.5rem;
  }
  &:hover{
    &>.hover{
      opacity: 1;
    }
  }
`

export const TileButtonIcon = styled.div`
width: 100%;
height: 100%;
`

export const TileButtonHoverIcon = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${backgroundColor};
  opacity: 0;
  transition: opacity ${mainTransitionsDuration}s ease-in-out;
`

