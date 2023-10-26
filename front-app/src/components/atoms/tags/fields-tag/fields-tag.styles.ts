import styled from "styled-components";
import {negativeColor, positiveColor} from "../../../../styles/variables.styles.ts";
import {pileChildren} from "../../../../styles/mixins.styles.ts";
import {flagTxt} from "../../../../styles/fonts-template.styles.ts";

export const FieldTagContainer = styled.div`
  height: 100%;
  aspect-ratio: 1/1;
  ${pileChildren}
`

const FieldTagCircle = styled.div`
  border-radius: 50%;
  width: 100%;
  height: 100%;
`

export const FieldTagCirclePositive = styled(FieldTagCircle)`
  background-color: ${positiveColor};
`

export const FieldTagCircleNegative = styled(FieldTagCircle)`
  background-color: ${negativeColor};
`

export const FieldTagText = styled.p`
    ${flagTxt};
  color: white;
`
