import React, { Component, useEffect, useState } from "react"
import Img from "../shared/imagens/Img"
import Satellits from "../shared/satellits/Satellits"
import Title from "../shared/title/Title"
import Descrition from "../shared/descrition/Descrition"
import Link from "../shared/link/Link"
import FormSatellits from "../shared/form/FormSatellits"

// Chamada de uma API inline
async function getSatellits(id_lua) {
    const response = await fetch(`http://127.0.0.1:5173/API/${id_lua}.json`)
    const date = response.json()
    return date
}


// ======= FORMATO COM FUNCTION E HOOKS ======= //

export default function CadaPlaneta(props) {
    const [satellits, setSatellits] = useState([])

    // UseEffect e Como o ComponentDidMounting, "[]" não deixa atulizar e crir um loop
    useEffect(() => {
        getSatellits(props.id).then(date => {
            setSatellits(date["satellites"])
        })
        
    }, [])


    // Adicionar satellit em cada planeta
    function addSatellits(new_Satellit) {
        setSatellits([...satellits, new_Satellit])
    }


    // Cria as tegs <li> e retorna em um array como props
    function create_li_satellits() {
        const li_satellits = satellits.map((elemento, index) => {
            return <li key={index}>{elemento.name}</li>
        })

        return li_satellits
    }


    return (
        <div id="main-planets">
            <hr />
            <Title 
                title={props.title}
            />
            <Img 
                img={props.img} 
                title={props.title}          
            />
            <Descrition 
                paragrafh={props.paragrafh}
                img={props.img} 
                title={props.title}
            />
            <FormSatellits 
                addSatellits={addSatellits}
            />
            <Satellits 
                img={props.img}
                li_satellits={create_li_satellits()}
            />
            <Link 
                link={props.link}
                paragrafh={props.paragrafh}
                img={props.img} 
                title={props.title}
            />
        </div>
    )
}
