import {useEffect, useState} from "react";

export enum QUERY_BREAKPOINTS{
     mobileBreakpoint = 480,
     tabletBreakpoint =  1190
}

const useMediaQuery : (queryBreakpoint : QUERY_BREAKPOINTS)=> boolean = (queryBreakpoint) =>{

    const [width, setWidth] = useState<number>(window.innerWidth);

    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    return (width <= queryBreakpoint)
}

export default useMediaQuery