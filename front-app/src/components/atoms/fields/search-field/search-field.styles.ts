import styled from "styled-components";
import {
  contentFramesShadow,
  mainColor,
  placeholderTextColor, searchInputHeight,
  windowFrameColor
} from "../../../../styles/variables.styles.ts";
import {placeholderTxt, searchListTxt} from "../../../../styles/fonts-template.styles.ts";

export const SearchInputContainer = styled.div`
  height: ${searchInputHeight};
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr ${searchInputHeight};
`

export const SearchInputField = styled.input`
  grid-row: 1/2;
  grid-column: 1/3;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  padding: 0 1rem;
  transition: border .25s ease-in-out;
  border: 1px solid transparent;

  background-color: ${windowFrameColor};
  box-shadow: ${contentFramesShadow};
  ${searchListTxt}

  &::placeholder {
    color: ${placeholderTextColor};
  ${placeholderTxt};
  }
  &:focus {
    border: 1px solid ${mainColor};
    ${placeholderTxt};
  }
`;

export const SearchInputIcon = styled.div`
  display: flex;
  justify-self: right;
  align-self: center;
  grid-row: 1/2;
  grid-column: 2/3;
  z-index: 3;
  height: 100%;
  width: 100%;
  padding: 5px;
  margin-right: 0.2rem;
`


