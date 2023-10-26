import {TopbarContainer} from "./topbar.styles.ts";
import TopbarButton from "../../atoms/buttons/topbar-button/topbar-button.component.tsx";
import WindowDropdown, {
    DopdownButtonConfigList,
    TriggerWindowDropdownAnimationRef
} from "../../molecules/windows/window-dropdown/window-dropdown.component.tsx";
import { useRef, useState} from "react";
import {mainTransitionsDuration} from "../../../styles/variables.styles.ts";
import {TOPBAR_ICONS} from "../../atoms/icons/topbar-icon/topbar-icons.list.tsx";

const profilDopdownList : DopdownButtonConfigList = [
    {title : "edit my profile", link : "/about-me"},
    {title : "logout", link : "/logout"},
]

const Topbar = () =>{

    const [isDropdown , setIsDropdown] = useState(false)

    const ref  = useRef<TriggerWindowDropdownAnimationRef>(null);


    const onClickProfil = () =>{
        setIsDropdown(true)

    }

    const onClickNotifications = () =>{
        console.log("Steel not implemented")
    }

    const onClickCloseHandler = () =>{
        if(ref.current){
            ref.current.triggerAnimation()
        }

        window.setTimeout(()=>{
            setIsDropdown(false)
        },mainTransitionsDuration*1000)

    }



    return (
        <TopbarContainer>
            <TopbarButton onClick={onClickProfil} icon={TOPBAR_ICONS.profil}/>
            <TopbarButton onClick={onClickNotifications} icon={TOPBAR_ICONS.notifications}/>
            {isDropdown && <WindowDropdown onClickClose={onClickCloseHandler} ref={ref} buttonsConfigList={profilDopdownList}/>}
        </TopbarContainer>
    )
}

export default Topbar

// <WindowDropdown onClose={onDopdownClick}/>