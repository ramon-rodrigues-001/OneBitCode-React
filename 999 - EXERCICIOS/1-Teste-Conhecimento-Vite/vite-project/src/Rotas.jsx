import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlanetsScreen from "./Screens/PlanetsScreen";

export default function Rotas() {
    return (
        <Router>
            <Routes>
                <Route  path="/" element={<PlanetsScreen />} />
            </Routes>
        </Router>
    )
}