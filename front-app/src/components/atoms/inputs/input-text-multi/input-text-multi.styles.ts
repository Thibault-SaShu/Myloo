import styled from "styled-components";
import {formsHeight} from "../../../../styles/variables.styles.ts";

export const InputTextMultiContainer = styled.div`

  min-width: 20rem;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 8rem auto;
  gap: 0.5rem;
`

export const InputTextMultiFieldsContainer = styled.div`
display: flex;
  flex-direction: column;
  gap: 2px;
`

export  const InputTextMultiLabelContainer = styled.div`
    height: ${formsHeight};
`