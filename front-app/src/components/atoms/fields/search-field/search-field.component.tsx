import {SearchInputContainer, SearchInputField, SearchInputIcon} from "./search-field.styles.ts";
import {FunctionComponent} from "react";

const SearchField :FunctionComponent = () =>{

    return (
        <SearchInputContainer>
            <SearchInputField
                type="text"

            />
            <SearchInputIcon>
                <SearchIcon/>
            </SearchInputIcon>
        </SearchInputContainer>
    )
}

export default SearchField





const SearchIcon :FunctionComponent = () =>(
    <svg fill="none" version="1.1" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_118_97)" fill="#000">
            <path d="m7.3424 1.9111c3.2644 0 5.9219 2.6576 5.9219 5.9219 0 3.2644-2.6575 5.9219-5.9219 5.9219-3.2644 0-5.9219-2.6575-5.9219-5.9219 0-3.2644 2.6552-5.9219 5.9219-5.9219zm0-1.4111c-4.0499 0-7.333 3.2832-7.333 7.333 0 4.0499 3.2832 7.333 7.333 7.333 4.0499 0 7.333-3.2831 7.333-7.333 0-4.0499-3.2831-7.333-7.333-7.333z"/>
            <path d="m13.447 12.957a1 1 0 0 0-0.70703 0.29297 1 1 0 0 0 0 1.4141l5.8398 5.8398a1 1 0 0 0 1.4141 0 1 1 0 0 0 0-1.4141l-5.8398-5.8398a1 1 0 0 0-0.70703-0.29297z" color="#000000" strokeLinecap="round" strokeMiterlimit="10"/>
        </g>

    </svg>
)