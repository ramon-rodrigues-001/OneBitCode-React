import React from "react"
import "./index.css"
import Img from "./shared/imagens/Img"
import Title from "./shared/title/Title"
import Descrition from "./shared/descrition/Descrition"
import Link from "./shared/link/Link"

export default function Planetas(props) {
    return (
        <div id="main-planets">
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
            <Link 
                link={props.link}
                paragrafh={props.paragrafh}
                img={props.img} 
                title={props.title}
            />
        </div>
    )
}