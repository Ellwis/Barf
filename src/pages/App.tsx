import {BrowserRouter, Route, Routes} from "react-router-dom";

// @ts-ignore
import "./globals.css";
import Landing from "./Landing";
import Request from "./Request";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Landing/>}/>
                    <Route path="/request" element={<Request/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}
