import React, {fragment} from 'react'

const DescritionWithLink = (props) => {
    if (!props.description) 
        return null

    if (props.link) {
        return (
            <fragment>
                <p>{props.description}</p>
                <p><a href={props.link}>{props.link}</a></p>
            </fragment>
        )
    } else {
        return <p><u>{props.description}</u></p>
    }
}

export default DescritionWithLink