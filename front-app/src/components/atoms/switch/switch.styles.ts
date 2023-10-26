import styled from "styled-components";
import {
    contentFramesShadow,
    mainColor, mainTransitionsDuration,
    searchInputHeight,
    windowFrameColor
} from "../../../styles/variables.styles.ts";
import {pileChildren} from "../../../styles/mixins.styles.ts";
import {searchListTxt} from "../../../styles/fonts-template.styles.ts";

export const SwitchContainer = styled.div`
  border-radius: 1rem;
  height: ${searchInputHeight};
  background-color: ${windowFrameColor};
  box-shadow:${contentFramesShadow};
  display: flex;
`

export const SwitchButton = styled.button`
  width: 100%;
  ${pileChildren};
  padding: 2px;
  overflow: hidden;
`

export const SwitchActiveButton = styled.div`
  transition: opacity 1s, transform ${mainTransitionsDuration/2}s ease-in-out;
  background-color: ${mainColor};
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transform: translateY(120%);
`
export const SwitchButtonText = styled.p`
  ${searchListTxt};
  color: ${mainColor};
`

export const SwitchActiveButtonText = styled(SwitchButtonText)`
  color: ${windowFrameColor};
`

