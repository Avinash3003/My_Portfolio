
import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from "../Components/Dashboard";
import About from "../Components/About";
import Projects from "../Components/Projects";
import Education from "../Components/Education";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="projects" element={<Projects/>}/>
                    <Route path="edu" element={<Education/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );

}

export default App
