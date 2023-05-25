import React, {Fragment} from "react"
import Planetas from "/planetas/Planetas.jsx"

export default function Planets(props) {
    return (
        <Fragment>
            <Planetas
                title={props.Title}
                paragrafh={props.Paragrafh}
                img={props.Img}
            />
        </Fragment>
    )
}