import {FunctionComponent, MouseEventHandler} from "react";
import {ListButtonHover, ListButtonListContainer, ListButtonSelected, ListButtonText} from "./list-button.styles.ts";

type ListButtonProps = {
    text : String
    isSelected ?: Boolean
    onClick : MouseEventHandler<HTMLButtonElement>
}

const ListButton  :FunctionComponent<ListButtonProps> = ({text, isSelected = false, onClick}) =>{

    const getLayers = () =>{

        if (isSelected) {
            return (<ListButtonSelected/>)
        } else {
            return (<ListButtonHover className="hover"/>)
        }
    }

    return (
        <ListButtonListContainer onClick={onClick}>
            {getLayers()}
            <ListButtonText>{text}</ListButtonText>
        </ListButtonListContainer>
    )
}

export default ListButton