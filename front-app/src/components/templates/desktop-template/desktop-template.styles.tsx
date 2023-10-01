import styled from "styled-components";
import {fixedInAllPage} from "../../../styles/mixins.styles.ts";
import {listWith, navbarWidth, phoneMediaQuery, topBar} from "../../../styles/variables.styles.ts";

export const DesktopTemplateContainer = styled.div`
    ${fixedInAllPage};
    display: flex;

  ${phoneMediaQuery}{
      flex-direction : column-reverse;
    }
`

export const DesktopTemplateNavbar =styled.div`
    width: ${navbarWidth};
  
  ${phoneMediaQuery}{
    flex-direction : column-reverse;
    width: 100%;
    height:  ${navbarWidth};
  }
`
export const DesktopTemplateMain = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const DesktopTemplateListAndContent = styled.div`
    width: 100%;
    height: 100%
`

export const DesktopTemplateTopBar = styled.div`
  height : ${topBar};
  width: 100%;
  background-color: red;
`

export const DesktopTemplateList = styled.div`
  height: 100%;
  width: ${listWith};
`

export const DesktopTemplateContent = styled.div``
