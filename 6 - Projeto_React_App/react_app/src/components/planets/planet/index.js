import React, {fragment} from 'react'
import GrayImg from '../../shared/gray_img'

const Planet = (props) => {
    return (
        <fragment>
            <h4>{props.title}</h4>
            <p>{props.descrition}</p>
            <GrayImg img_url={props.img_url}/><GrayImg />
        </fragment>
    )
}

export default Planet