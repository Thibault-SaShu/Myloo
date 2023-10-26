import styled from "styled-components";
import {mainNavbarButtonTxt} from "../../../../styles/fonts-template.styles.ts";
import {mainColor, navbarWidth, phoneMediaQuery, tabletMediaQuery} from "../../../../styles/variables.styles.ts";
import {pileChildren} from "../../../../styles/mixins.styles.ts";

export const NavbarButtonContainer = styled.button`
  padding: .3rem;
  width: ${navbarWidth};
  height: ${navbarWidth};
  aspect-ratio: 1/1;
  ${pileChildren};
  
  ${phoneMediaQuery}{
    width: auto;
    height: 100%;
  }
`

export const NavbarButtonContent =styled.div`
  padding: 5px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 75% 25%;
  z-index: 2;
  &:hover{
    &>*>*:first-child{
      opacity: 0;
    }
    &>*>*:last-child{
      opacity: 1;
    }
  }
`

export const NavbarButtonLogo=styled.div`
  z-index: 3;
  ${pileChildren};
  &>* {
    height: 80%;
    transition: opacity 500ms;
  }
  &>*:last-child{
    opacity: 0;
  }
`

export const NavbarButtonText = styled.div`
  z-index: 3;
  color: ${mainColor};
  line-height: 85%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &>*{
    color: ${mainColor};
    ${mainNavbarButtonTxt};
    white-space: nowrap;
    align-items: center;
    justify-content: center;

    ${tabletMediaQuery}{
      font-size: .7rem;

    }
    
    ${phoneMediaQuery}{
      font-size: .6rem;

    }
  }
`

export const NavbarButtonSelector = styled.span`
    z-index: 2;
    grid-row: 1/3;
    grid-column: 1;
    width: 100%;
    height: 100%;
    border-radius: 20%;
    background-color:  ${mainColor};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  `;
