import styled from "styled-components";
import {fixedInAllPage} from "../../styles/mixins.styles.ts";
import {
    backgroundColor,
    navbarMobileWidth, navbarTabletWidth,
    navbarWidth,
    phoneMediaQuery,
    tabletMediaQuery,
    topBarHeight
} from "../../styles/variables.styles.ts";

export const DesktopContainer = styled.div`
    ${fixedInAllPage};
    display: flex;
  background-color: ${backgroundColor};

  ${phoneMediaQuery}{
      flex-direction : column-reverse;
    }
`

export const DesktopNavbar =styled.div`
    width: ${navbarWidth};
  
  
  ${tabletMediaQuery}{
    width:  ${navbarTabletWidth};
  }
  
  ${phoneMediaQuery}{
    flex-direction : column-reverse;
    width: 100%;
    height:  ${navbarMobileWidth};
  }
`
export const DesktopMain = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: ${topBarHeight} 100%;
  grid-template-columns: 100% ;
`

export const DesktopListAndContent = styled.div`
    width: 100%;
    height: 100%;
  
`

export const DesktopTopBar = styled.div`
  height : ${topBarHeight};
  width: 100%;
`