import styled from "styled-components";
import {pileChildren} from "../../../styles/mixins.styles.ts";

export const NavbarMainContainer = styled.div`
  width: 100%;
  height: 100%; 
  ${pileChildren}
  &>*{
    width: 100%;
    transition: transform 0.5s;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    z-index: 2;
  }
  
`

export const NavbarLeftContainer = styled.div`
  transform-origin: center left;

`

export const NavbarRightContainer = styled.div`
  transform-origin: center right;
`