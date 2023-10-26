import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from "./App.tsx";
import "./index.css"
import FontStyles from "./styles/fonts.styles.ts";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <FontStyles/>
            <BrowserRouter>
                <App />
            </BrowserRouter>
    </React.StrictMode>
);