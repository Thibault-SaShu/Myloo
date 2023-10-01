import styled from "styled-components";
import {mainNavbarButtonTxt} from "../../../../styles/fonts-template.styles.ts";
import {mainColor} from "../../../../styles/variables.styles.ts";
import {pileChildren} from "../../../../styles/mixins.styles.ts";

export const NavbarButtonContainer = styled.button`
  padding: .5rem;
  width: 100%;
  aspect-ratio: 1/1;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: .8fr .2fr;
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
  
  justify-items: center;
  align-items: center;
  transform-origin: bottom;
  height: 100%;
  ${pileChildren}
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
    ${mainNavbarButtonTxt}
  }
`

export const NavbarButtonSelector = styled.span`
    z-index: 2;
    grid-row: 1/3;
    grid-column: 1;
    width: 100%;
    height: 100%;
    border-radius: 20%;
  border: 2px solid black;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.5);
  `;
