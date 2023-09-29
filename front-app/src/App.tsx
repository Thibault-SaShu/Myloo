import {Route, Routes} from "react-router-dom";
import Desktop from "./routes/desktop/desktop.component.tsx";

const App = () =>{
    return (
        <Routes>
            <Route path='/' element={<Desktop/>}/>
        </Routes>
    )
}

export default App