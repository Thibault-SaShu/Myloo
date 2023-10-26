import styled from "styled-components";
import {pileChildren} from "../../../styles/mixins.styles.ts";

export const NavbarDesktopMainContainer = styled.div`
  width: 100%;
  height: 100%; 
  ${pileChildren}
  &>*{
    width: 100%;
    transition:
        transform 0.5s ease-in-out,
        opacity 0.5s ease-in-out;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    z-index: 2;
  }
`

 export const NavbarDesktopLeftContainer = styled.div`
  transform-origin: center left;
`



export const NavbarDesktopRightContainer = styled.div`
  transform-origin: center right;
`
