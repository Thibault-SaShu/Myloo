import styled from "styled-components";
import {listTileTitle, valueTxt} from "../../../styles/fonts-template.styles.ts";
import {
  contentFramesShadow,
  mainColor,
  mainTransitionsDuration,
  windowFrameColor
} from "../../../styles/variables.styles.ts";
import {pileChildren} from "../../../styles/mixins.styles.ts";

export const ListTileContainer = styled.div`
  box-shadow: ${contentFramesShadow}
  border-radius: 1rem;
  margin: 0;
  ${pileChildren};
`

/*Not selected Tile*/
export const ListTileNotSelected = styled.div`
  background-color: ${windowFrameColor};
  width: 100%;
  height: 100%;
  ${pileChildren};
  border-radius: 1rem;

  overflow: hidden;
  }
`

export const ListTileHover = styled.div`
  z-index: 2;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  border: 2px solid ${mainColor};
  opacity: 0;
  transition: opacity ${mainTransitionsDuration}s ease-in-out;
  &:hover{
   
      opacity: 1;
    }
`
export const ListTileContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 6px 8px 10px 8px;
  &>*{
    color: ${mainColor};

  }
`


/*SelectedTile*/
export const ListTileSelected = styled.div`
  width: 100%;
  height: 100%;
  ${pileChildren};
  background-color: ${mainColor};
  border-radius: 1rem;
  overflow: hidden;

`
export const ListTileButtonsContainer = styled.div`
  display: flex;
  z-index: 2;
  height: 100%;
  width: 100%;
  flex-direction: row-reverse;
  align-items: center;
  gap: 0.8rem;
`

export const ListTileButtonsBackground = styled.div`
  display: grid;
  height: 100%;
  grid-template-rows: 100%;
  grid-template-columns: 4rem 1fr 1rem;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, rgba(0, 0, 0,0) 0%, ${mainColor} 100%);
    grid-column: 1;
  }
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: ${mainColor};
    grid-column: 3;
  }
  & > div {
    padding-left: 1rem;
    grid-column: 2;
    display: flex;
    justify-content: stretch;
    align-items: center;
    height: 100%;
    background-color: ${mainColor};
  }




`

export const  ListTileSelectedContent = styled(ListTileContent)`
  &>*{color: ${windowFrameColor};}
  z-index: 1;
`



/*Text*/


export const ListTileTitle = styled.h3`
  ${listTileTitle};
`

export const ListTileSecond = styled.h5`
  ${valueTxt};

`