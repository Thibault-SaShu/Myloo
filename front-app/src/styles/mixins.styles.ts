import {css} from "styled-components";

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



