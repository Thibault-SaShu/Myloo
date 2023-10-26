import {
    CSSProperties,
    forwardRef,
    FunctionComponent,
    PropsWithChildren,
    Ref, useCallback, useEffect,
    useImperativeHandle,
    useRef,
    useState
} from "react";
import { v4 as uuid } from 'uuid';
import WindowBackground, {
    TriggerWindowBackgroundAnimationRef
} from "../../molecules/windows/window-background/window-background.component.tsx";
import {
    MainWindowBody,
    MainWindowContainer,
    MainWindowFrame,
    MainWindowNavigationBar,
    MainWindowPrimaryTitle,
    MainWindowSecondaryTitle,
    MainWindowTopBar,
    MainWindowTopBarButtonsContainer,
    MainWindowTopBarTitlesContainer
} from "./main-window.styles.ts";
import NavigationButton, {
    NAVIGATION_BUTTON_STYLE,
    NavigationButtonProps
} from "../../atoms/buttons/navigation-button/navigation-button.component.tsx";
import EditorButton, {EditorButtonProps} from "../../atoms/buttons/editor-button/editor-button.component.tsx";
import {NAVIGATION_ICONS} from "../../atoms/icons/navigation-icons/navigation-icons.list.tsx";
import FormContent from "../form-content/form-content.component.tsx";

export interface TriggerMainWindowAnimationRef {
    triggerAnimation: () => void
}

type MainWindowProps = PropsWithChildren<{
    primaryTitle : string
    secondaryTitle ?: string | null
    topButtons ?: EditorButtonProps[] | null
    bottomButtons ?: NavigationButtonProps[] | null
    onClickClose : ()=>void
    ref: Ref<TriggerMainWindowAnimationRef>
}>

const MainWindow :FunctionComponent<MainWindowProps> = forwardRef( (
    {primaryTitle,
        secondaryTitle = null,
        topButtons = null,
        bottomButtons = null,
        onClickClose,
        children
    }, ref : Ref<TriggerMainWindowAnimationRef>) =>{

    const windowBgRef  = useRef<TriggerWindowBackgroundAnimationRef>(null);
    const  [style, setStyle] = useState<CSSProperties>({ transform : "rotateX(90deg)}", opacity: 0 })

    useImperativeHandle(ref, () => ({
        triggerAnimation() {
            if(windowBgRef.current){
                windowBgRef.current.triggerWindowBackgroundAnimation()
                setStyle({ transform : "rotateX(90deg)", opacity: 0})
            }
        }
    }));

    useEffect(() => {
        setStyle({ transform : "rotateX(0)", opacity: 1 })
    }, []);

    const getTopButtons = useCallback(() =>{
        if (topButtons){
            return topButtons.map(e => (<EditorButton key={uuid()} type={e.type} icon={e.icon} text={e.text} onClick={e.onClick}/>))
        }
    },[topButtons])

    const getBottomButtons = useCallback(() =>{
        if (bottomButtons){
            return bottomButtons.map(e => (<NavigationButton key={uuid()} type={e.type} icon={e.icon} onClick={e.onClick}/>))
        }
    },[bottomButtons])

    return(
        <>
            <WindowBackground onClick={onClickClose} isTransparent={false} ref={windowBgRef}/>
            <MainWindowContainer>
                <MainWindowFrame style={style}>
                    <MainWindowTopBar>
                        <MainWindowTopBarTitlesContainer>
                            <MainWindowPrimaryTitle>{primaryTitle}</MainWindowPrimaryTitle>
                            {secondaryTitle && <MainWindowSecondaryTitle>secondaryTitle</MainWindowSecondaryTitle>}
                        </MainWindowTopBarTitlesContainer>
                        { topButtons &&
                            <MainWindowTopBarButtonsContainer>
                                {getTopButtons()}
                            </MainWindowTopBarButtonsContainer>
                        }

                    </MainWindowTopBar>

                    <FormContent>
                        {children}
                    </FormContent>

                    <MainWindowNavigationBar>
                        {bottomButtons ? getBottomButtons() : <NavigationButton type={NAVIGATION_BUTTON_STYLE.primary} icon={NAVIGATION_ICONS.cancel} onClick={onClickClose}/>}
                    </MainWindowNavigationBar>

                </MainWindowFrame>
            </MainWindowContainer>
        </>
    )
})


export default MainWindow