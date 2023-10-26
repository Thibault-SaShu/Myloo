import styled from "styled-components";
import {
    contentDisplayPrimaryTitle, contentDisplaySecondaryTitle,
} from "../../../styles/fonts-template.styles.ts";

export const ContentDisplayMainContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-right: 3rem;
  padding-left: 3rem;
`

export const ContentDisplayTitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const ContentDisplayTitlePrimary = styled.h2`
  height: 100%;
  ${contentDisplayPrimaryTitle}

`

export const ContentDisplayTitleSecondary = styled.h5`
  height: 100%;
  ${contentDisplaySecondaryTitle}
`

export const ContentDisplayContentContainer = styled.div`
 margin-top: 1.2rem;
`