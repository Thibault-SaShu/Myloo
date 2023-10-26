import styled from "styled-components";
import {
  formsHeight,
  inputColor,
  mainColor,
  placeholderTextColor,
} from "../../../../styles/variables.styles.ts";
import {placeholderTxt, valueTxt} from "../../../../styles/fonts-template.styles.ts";


export const TextFieldContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr ${formsHeight};
  width: 100%;
`;

export const TextFieldInput = styled.input`
  grid-column: 1/3;
  grid-row: 1/1;
  border-radius: 1rem ;
  width: 100%;
  text-indent: 10px;
  border: 1px solid transparent;
  transition: border .25s ease-in-out;
  ${valueTxt};
  height: ${formsHeight};
  background-color: ${inputColor};
  padding-right: ${formsHeight};
  padding-left: ${formsHeight}/3;

  &::placeholder {
    text-indent: 10px;
    color: ${placeholderTextColor};
    ${placeholderTxt}
    
  }
  &:focus {
    border: 1px solid ${mainColor};
  }
`
export const TextFieldIcon = styled.div`
  grid-column: 2/2;
  grid-row: 1/1;
  width: ${formsHeight};
  height: ${formsHeight};
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(.75);
`;

export const TextFieldNoRadius = styled(TextFieldInput)`
  border-radius: 0;
`

export const TextFieldAllRadius = styled(TextFieldInput)`
  border-radius: .8rem;
`


export const TextFieldTopRadius = styled(TextFieldInput)`
  border-radius: .8rem .8rem 0 0;
`

export const TextFieldBottomRadius = styled(TextFieldInput)`
  border-radius: 0 0 .8rem .8rem;
`