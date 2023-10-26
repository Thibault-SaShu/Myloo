import styled from "styled-components";
import {verticalScrollBar} from "../../../styles/mixins.styles.ts";
import {tabletMediaQuery} from "../../../styles/variables.styles.ts";

export const FormContentContainer = styled.div`
  margin: 1rem 0 1.5rem 0;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 50% 50%;
  row-gap: 1rem;
  ${verticalScrollBar}
  ${tabletMediaQuery}{
    grid-template-columns: 100%;
  }  
`