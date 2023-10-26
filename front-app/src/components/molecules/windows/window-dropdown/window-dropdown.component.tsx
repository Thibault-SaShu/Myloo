import {
    CSSProperties,
    forwardRef,
    FunctionComponent, MouseEventHandler,
    Ref,
    useEffect,
    useImperativeHandle,
    useRef,
    useState
} from "react";
import { v4 as uuid } from 'uuid';

import WindowBackground, {
    TriggerWindowBackgroundAnimationRef
} from "../window-background/window-background.component.tsx";
import {WindowDropdownFrame} from "./window-dropdown.styles.tsx";
import ListButton from "../../../atoms/buttons/lIst-button/list-button.component.tsx";
import {To, useNavigate} from "react-router-dom";

export interface TriggerWindowDropdownAnimationRef {
    triggerAnimation: () => void
}

export interface DopdownButtonConfigObj {title : String, link : To}
export type DopdownButtonConfigList =  DopdownButtonConfigObj[]

type TopbarDropdowProps = {
    buttonsConfigList : DopdownButtonConfigList,
    onClickClose : ()=>void,
    ref : Ref<TriggerWindowDropdownAnimationRef>
}

const WindowDropdown :FunctionComponent<TopbarDropdowProps> = forwardRef(({buttonsConfigList, onClickClose}, ref : Ref<TriggerWindowDropdownAnimationRef>) =>{

    const navigate = useNavigate()
    const windowBgRef  = useRef<TriggerWindowBackgroundAnimationRef>(null);
    const  [style, setStyle] = useState<CSSProperties>({ transform : "rotateX(-90deg)}" , opacity: 0})

    useImperativeHandle(ref, () => ({
         triggerAnimation() {
             if(windowBgRef.current){
                 windowBgRef.current.triggerWindowBackgroundAnimation()
                 setStyle({ transform : "rotateX(90deg)", opacity: 0})
             }
        }
    }));

    useEffect(() => {
        setStyle({ transform : "rotateX(0)", opacity: 1})
    }, []);

    const getButtonOnClickFunction : (link : To) =>  MouseEventHandler<HTMLButtonElement> =
        (link)=> ()=>{
            onClickClose()
            navigate(link)
        }

    const getButtonsList = () =>buttonsConfigList.map(e => <ListButton key={uuid()} text={e.title} onClick={getButtonOnClickFunction(e.link)}/>)

    return (
        <>
            <WindowBackground onClick={onClickClose} isTransparent={true} ref={windowBgRef}/>
            <WindowDropdownFrame style={style}>
                {getButtonsList()}
            </WindowDropdownFrame>
        </>
    )
})

export default WindowDropdown