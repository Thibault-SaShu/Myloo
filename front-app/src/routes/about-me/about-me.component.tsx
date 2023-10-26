import {FunctionComponent, useEffect, useRef, useState} from "react";
import MainWindow, {
    TriggerMainWindowAnimationRef
} from "../../components/templates/main-window/main-window.component.tsx";
import {useNavigate} from "react-router-dom";
import {mainTransitionsDuration} from "../../styles/variables.styles.ts";
import InputText from "../../components/atoms/inputs/input-text/input-text.component.tsx";
import {companyAddress, companyEmail, companyName, companyPhone} from "../../data/validators.data.ts";
import {InputTextEvent, InputTextOnChange} from "../../components/atoms/fields/text-field/text-field.component.tsx";
import InputTextMulti from "../../components/atoms/inputs/input-text-multi/input-text-multi.component.tsx";




const AboutMe : FunctionComponent<{}> = () =>{

    const navigate = useNavigate()
    const windowRef  = useRef<TriggerMainWindowAnimationRef>(null);
    const [content, setContent] = useState<{ [key: string]: string | string[] }>({})

    const onclickClose = () =>{
        if (windowRef.current){
            windowRef.current.triggerAnimation()
        }
        window.setTimeout(()=>{
            navigate(-1)
        },mainTransitionsDuration*1000)
    }

    useEffect(() => {
        console.log(content)
    }, [content]);

    const createStringValue : (key: string )=> string= (key) => {
        if (key in content && !Array.isArray(content[key])){
            return content[key].toString()
        } else {
            return ""
        }
    }

    // @ts-ignore
    const createStringArrayValue :  (key: string )=> string[]= (key) => {
        if (key in content && Array.isArray(content[key])){
            return content[key]
        } else {
            return [""]
        }
    }

    const onChangeInput : InputTextOnChange = (event : InputTextEvent) =>{
       if (event.name ){
           setContent({...content, [event.name] : event.value})
       }
    }

    return (
        <MainWindow primaryTitle="about me" onClickClose={onclickClose} ref={windowRef}>
            <InputText name="name"
                       label="name"
                       placeholder="name of the company"
                       editable
                       onChange={onChangeInput}
                       validator={companyName}
                       value={createStringValue("name")}/>

            <InputText name="email"
                       label="email"
                       editable
                       placeholder={"The main contact email of the company"}
                       value={createStringValue("email")}
                       validator={companyEmail}
                       onChange={onChangeInput}/>

            <InputTextMulti name="phone"
                            label="phone"
                            editable
                            placeholder={"Phone numbers to contact the company"}
                            value={createStringArrayValue("phone")}
                            validator={companyPhone}
                            fieldsNumber={3}
                            onChange={onChangeInput}/>

            <InputTextMulti name="address"
                            label="address"
                            editable
                            placeholder={"Street, street number, building number..."}
                            value={createStringArrayValue("address")}
                            validator={companyAddress}
                            fieldsNumber={3}
                            onChange={onChangeInput}/>

            <InputText name="zip"
                       label="zip code"
                       editable
                       placeholder={"Zip code of the city"}
                       value={createStringValue("zip")}
                       validator={companyEmail}
                       onChange={onChangeInput}/>

            <InputText name="city"
                       label="city"
                       editable
                       placeholder={"Name of the city"}
                       value={createStringValue("city")}
                       validator={companyEmail}
                       onChange={onChangeInput}/>

            <InputText name="state"
                       label="state"
                       editable
                       placeholder={"The main contact email of the company"}
                       value={createStringValue("state")}
                       validator={companyEmail}
                       onChange={onChangeInput}/>

            <InputText name="ico"
                       label="ICO"
                       editable
                       placeholder={"The main contact email of the company"}
                       value={createStringValue("ico")}
                       validator={companyEmail}
                       onChange={onChangeInput}/>

            <InputText name="dic"
                       label="DIC"
                       editable
                       placeholder={"The main contact email of the company"}
                       value={createStringValue("dic")}
                       validator={companyEmail}
                       onChange={onChangeInput}/>

            <InputText name="account"
                       label="account"
                       editable
                       placeholder={"The main contact email of the company"}
                       value={createStringValue("account")}
                       validator={companyEmail}
                       onChange={onChangeInput}/>

            <InputText name="iban"
                       label="iban"
                       editable
                       placeholder={"The main contact email of the company"}
                       value={createStringValue("iban")}
                       validator={companyEmail}
                       onChange={onChangeInput}/>

            <InputText name="bic"
                       label="bic"
                       editable
                       placeholder={"The main contact email of the company"}
                       value={createStringValue("bic")}
                       validator={companyEmail}
                       onChange={onChangeInput}/>


        </MainWindow>
    )
}

export default AboutMe