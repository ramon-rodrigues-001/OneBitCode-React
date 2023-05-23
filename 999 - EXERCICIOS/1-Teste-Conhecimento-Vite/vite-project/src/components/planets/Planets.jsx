import React, {Fragment} from "react"

export default function Planets(props) {
    return (
        <Fragment>
            <h2>{props.title}</h2>
            <p>{props.paragrafh}</p>
        </Fragment>
    )
}