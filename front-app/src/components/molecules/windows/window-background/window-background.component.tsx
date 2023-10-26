import {WindowBackgroundColor, WindowBackgroundContainer} from "./window-background.styles.ts";
import {NavbarButtonEvent} from "../../../atoms/buttons/navbar-button/navbar-button.component.tsx";
import {CSSProperties, forwardRef, FunctionComponent, Ref, useEffect, useImperativeHandle, useState} from "react";

export interface TriggerWindowBackgroundAnimationRef {
    triggerWindowBackgroundAnimation: () => void
}

type WindowBackgroundProps = {
    onClick : Function
    isTransparent ?: boolean
    ref : Ref<TriggerWindowBackgroundAnimationRef>
}

const WindowBackground:FunctionComponent<WindowBackgroundProps> = forwardRef(({onClick, isTransparent=false}, ref : Ref<TriggerWindowBackgroundAnimationRef> ) =>{

    const [opacityStyle, setOpacityStyle] = useState<CSSProperties>( {opacity: 0})

    useEffect(() => {
        setOpacityStyle({opacity: 1})
    }, []);

    const onClickHandler = (e:NavbarButtonEvent)  =>{
        e.preventDefault()
        console.log("Click on background")
        onClick(e)
    }

    useImperativeHandle(ref, () => ({
        triggerWindowBackgroundAnimation() {
            setOpacityStyle({opacity: 0})
        }
    }));


    return (
        <WindowBackgroundContainer onClick={onClickHandler}>
            {!isTransparent && <WindowBackgroundColor style={opacityStyle}/>}
        </WindowBackgroundContainer>
    )
})

export default WindowBackground