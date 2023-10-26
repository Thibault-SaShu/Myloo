import styled from "styled-components";
import {fixedInAllPage} from "../../../../styles/mixins.styles.ts";
import {mainTransitionsDuration, windowBackgroundColor} from "../../../../styles/variables.styles.ts";

export const WindowBackgroundContainer = styled.button`
  ${fixedInAllPage};
  background-color: transparent;
  z-index: 5;
`

export const WindowBackgroundColor = styled.div`
  height: 100%;
  width: 100%;
  backdrop-filter: blur(1px);
  transition: opacity ${mainTransitionsDuration}s ease-in-out;
  background: ${windowBackgroundColor};
  opacity: 0;
`