import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlanetsScreen from "./Screens/PlanetsScreen";
import PlanetDetailsScreen from "./Screens/PlanetDetailsScreen";

export default function Rotas() {
    return (
        <Router>
            <Routes>
                <Route  
                    path="/" 
                    element={<PlanetsScreen />} 
                />
                <Route 
                    path="/:id" 
                    element={<PlanetDetailsScreen />}
                />
            </Routes>
        </Router>
    )
}