import styled from "styled-components";
import {contentFramesShadow, windowFrameColor} from "../../../styles/variables.styles.ts";
import {contentDisplayFrameTitle} from "../../../styles/fonts-template.styles.ts";

export const ContentFrameContainer = styled.div`
  background-color: ${windowFrameColor};
  width: 100%;
  padding: 1rem 2rem 1.6rem 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  box-shadow: ${contentFramesShadow};
`

export const ContentFrameTitle = styled.h4`
${contentDisplayFrameTitle}`

export const ContentFrameForm = styled.div``


