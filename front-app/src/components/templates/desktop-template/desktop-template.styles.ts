import styled from "styled-components";
import {listWith} from "../../../styles/variables.styles.ts";
import {verticalScrollBar} from "../../../styles/mixins.styles.ts";

export const DesktopTemplateContainer= styled.div`
width: 100%;
  height: 100%;
  display: flex;
`

export const DesktopTemplateListContainer = styled.div`
  width: ${listWith};
  gap: 0.8rem;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto auto;
align-content: flex-start`

export const DesktopTemplateContentContainer = styled.div`
  height: 100%;
  width: 100%;
`

export const DesktopTemplatelistSearchContainer =styled.div`
  gap: 0.8rem;
  display: flex;
  flex-direction: column;
  height: fit-content;
  &>* {
    margin: 0 .6rem;
  }

`

export const DesktopTemplatelistTilesContainer = styled.div`
  width: 100%;
  ${verticalScrollBar};
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  gap: 0.8rem;
  padding:0 .6rem;
`