import {Route, Routes} from "react-router-dom";
import Desktop from "./routes/desktop/desktop.component.tsx";
import AboutMe from "./routes/about-me/about-me.component.tsx";
import Companies from "./routes/companies/companies.component.tsx";

const App = () =>{
    return (
        <Routes>
            <Route path='/' element={<Desktop/>}>
                <Route path="about-me" element={<AboutMe/>}/>
                <Route path="companies" element={<Companies/>}/>
            </Route>
        </Routes>
    )
}

export default App