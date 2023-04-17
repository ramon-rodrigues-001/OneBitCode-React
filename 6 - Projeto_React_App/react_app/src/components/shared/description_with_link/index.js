import React, {fragment} from 'react'

const DescritionWithLink = (props) => {
    return (
        <fragment>
            <p>{props.description}</p>
            <p><a href={props.link}>{props.link}</a></p>
        </fragment>
    )
}

export default DescritionWithLink