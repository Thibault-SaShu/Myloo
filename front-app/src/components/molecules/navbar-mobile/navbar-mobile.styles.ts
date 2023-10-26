import styled from "styled-components";
import {mainColor, phoneMediaQuery} from "../../../styles/variables.styles.ts";

export const NavbarMobileContainer =  styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 55% 45%;
  &>*{
    display: flex;
    flex-direction : column;
    align-items: center;
    justify-content: center;
  }
  
  ${phoneMediaQuery}{
    grid-template-rows: 45% 55%;
    grid-template-columns: 100%;
    &>*{
      flex-direction : row;
      padding: 0 10px;
      &>*{
        height: 100%;

      }
    }
    &>*:first-child{
      grid-row: 0/1;
    }
    &>*:last-child{
      grid-row: 1/2;

    }
  }
`


export const NavbarMobileMain = styled.div`

`

export const NavbarMobileSecond = styled.div`
  border-left: 1px solid ${mainColor};
`

/*
  ${phoneMediaQuery}{
    flex-direction : column-reverse;
    width: 100%;
    &>*{
      flex-direction : row;
    }
  }
 */