import React, {Fragment} from "react"
import Img from "../shared/img/Img"
import Title from "../shared/title/Title"
import Descrition from "../shared/descrition/Descrition"

export default function Planetas(props) {
    return (
        <Fragment>
            <Title 
                title={props.title}
            />
            <Img 
                img={props.img}            
            />
            <Descrition 
                paragrafh={props.paragrafh}
            />
            
        </Fragment>
    )
}