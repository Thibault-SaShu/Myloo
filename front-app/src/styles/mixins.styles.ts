import {css} from "styled-components";
import {mainColor} from "./variables.styles.ts";

/**
 * fixe the element on all the screen
 */
export const  fixedInAllPage = css`
  position: fixed;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
`;

/**
 * pile all children to make transitions
 */
export const pileChildren = css`
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 100%;
  &>* {
    grid-row: 1;
    grid-column: 1;
    justify-self: center;
    align-self: center;
  }
`

export const verticalScrollBar =css`
    overflow-x: hidden;
    overflow-y : auto;
    scrollbar-width: 5px;
    scrollbar-color: ${mainColor} transparent;

&::-webkit-scrollbar {
        width: 5px;
    }

&::-webkit-scrollbar-track {
        background: transparent;
        width: 2px;
    }

&::-webkit-scrollbar-thumb {
        background-color: ${mainColor};
        border-radius: 20px;
    }
`



