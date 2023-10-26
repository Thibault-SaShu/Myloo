import {css} from "styled-components";
import {mainColor} from "./variables.styles.ts";

/*Navbar*/
export const mainNavbarButtonTxt = css`
  font-family: "sans", sans-serif;
  font-weight: 400;
  font-size: .9rem;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const listButtonTxt = css`
  font-family: "sans", sans-serif;
  font-weight: 400;
  font-size: .9rem;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const windowPrimaryTitle = css`
    font-family: "sans", serif;
    font-weight: 400;
    font-size: 2rem;
    text-transform: lowercase;
  color: ${mainColor};
`

export const windowSecondaryTitle = css`
    font-family: "sans", serif;
    font-weight: 300;
    font-size: 1rem;
    text-transform: lowercase;
    color: ${mainColor};

  &::first-letter {
        text-transform: uppercase;
    
      }
`

export const editorButtonTxt = css`
  font-family: "sans", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: lowercase;
`

/* form text templates */
export const placeholderTxt = css`
  font-family: "sans", serif;
  font-weight: 500;
  font-size: .8rem;
`

export const labelTxt = css`
  font-family: "sans", serif;
  font-weight: 500;
  font-size: 1rem;
`

export const valueTxt = css`
  font-family: "sans", serif;
  font-weight: 300;
  font-size: 1rem;
`
export const flagTxt = css`
  font-family: "sans", serif;
  font-weight: 500;
  font-size: .9rem;
`

export const searchListTxt = css`
  font-family: "sans", sans-serif;
  font-weight: 500;
  font-size: .9rem;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: lowercase;
`

export const listTileTitle = css`
    font-family: "sans", serif;
    font-weight: 700;
    font-size: 1.3rem;
    text-transform: lowercase;
    overflow: hidden;

  text-overflow: ellipsis;
  white-space: nowrap;
  &::first-letter {
        text-transform: uppercase;
    
      }
`


export const contentDisplayPrimaryTitle = css`
    font-family: "sans", serif;
    font-weight: 400;
    font-size: 2.3rem;
    text-transform: lowercase;
  color: ${mainColor};
`

export const contentDisplaySecondaryTitle = css`
    font-family: "sans", serif;
    font-weight: 700;
    font-size: 2.3rem;
    text-transform: lowercase;
    color: ${mainColor};

  &::first-letter {
        text-transform: uppercase;
    
      }
`

export const contentDisplayFrameTitle = css`
    font-family: "sans", serif;
    font-weight: 400;
    font-size: 1.5rem;
    text-transform: lowercase;
  color: ${mainColor};
`