import React, {fragment} from 'react'
import './style.css'

const GrayImg = (props) => {
    if (!props.description) 
        return (
            <fragment>
                <img src={props.img_url} className='img-planet'></img>
                <hr />
            </fragment>
        )

    else {
        return (
            <fragment>
                <img src={props.img_url} className='img-planet'></img>
                <ul>
                    {props.satellits}
                </ul>
                <hr />
            </fragment>
        )
    }   
}

export default GrayImg