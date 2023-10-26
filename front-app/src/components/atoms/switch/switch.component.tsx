import {CSSProperties, FormEvent, FunctionComponent, useCallback} from "react";
import {
    SwitchActiveButton,
    SwitchActiveButtonText,
    SwitchButton,
    SwitchButtonText,
    SwitchContainer
} from "./switch.styles.ts";

export interface SwitchButtonEvent extends FormEvent<HTMLButtonElement> {
    name ?: string
    position ?: number
}

type SwitchProps = {
    name : string,
    onClick : (e : SwitchButtonEvent) => void
    labels : string[]
    position : number
}

const Switch : FunctionComponent<SwitchProps> = ({name, onClick, labels, position}) => {

    const getStyle: (index: number) => CSSProperties = (index) => {
        if (index === position) {
            return {
                opacity: 1,
                transform: "translateY(0)"

            }
        } else {
            return {opacity: 0,
                transform: "translateY(120%)"
            }
        }
    }


    const onClickHandler = (e :SwitchButtonEvent , i: number) =>{
        e.preventDefault()
        e.name = name
        e.position = i
        onClick(e)
    }


    const getButtons = useCallback(() =>{
        return labels.map((e, i) =>(
            <SwitchButton onClick={(e)=>{onClickHandler(e, i)}} key={i}>
                <SwitchActiveButton style={getStyle(i)}>
                    <SwitchActiveButtonText>{e}</SwitchActiveButtonText>
                </SwitchActiveButton>
                <SwitchButtonText>{e}</SwitchButtonText>
            </SwitchButton>
        ))
    },[labels])


    return (
        <SwitchContainer>
            {getButtons()}
        </SwitchContainer>
    )
}

export default Switch