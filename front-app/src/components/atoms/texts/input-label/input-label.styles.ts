import styled from "styled-components";
import {labelTxt, valueTxt} from "../../../../styles/fonts-template.styles.ts";
import {mainColor} from "../../../../styles/variables.styles.ts";

const TextsFormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`

export const TextsFormLabelContainer = styled(TextsFormContainer)`
  justify-content: flex-end;
`
export const TextsFormValueContainer = styled(TextsFormContainer)`
  justify-content: flex-start;
`

export const TextsFormLabelTxt = styled.h6`
    color: ${mainColor};
    ${labelTxt}
`

export const TextsFormValueTxt = styled.p`
    color: ${mainColor};
    ${valueTxt};
`