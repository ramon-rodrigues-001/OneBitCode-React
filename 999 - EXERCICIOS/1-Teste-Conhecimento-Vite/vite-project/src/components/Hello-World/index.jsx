import React from "react";
import "./index.css"

import Planetas from "../Planetas";

export default function HelloWorld() {

    function criar_objeto_planet() {
        const title = prompt('Name of planet')
        const descrition = prompt('Descrition of planet')
        const link = prompt('link for wikpedia of planet')

        const Planeta = new Planetas()
        Planeta.addPlanets({id:title, Title:title, Descrition:descrition, Link:link})
    }


    return (
        <div id="hello">
            <h1>Ola Mundo</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati blanditiis corporis.</p>
            <button onClick={criar_objeto_planet}>Add Planets</button>
        </div>
    )
}