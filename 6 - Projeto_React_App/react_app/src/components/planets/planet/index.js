import React, {fragment} from 'react'
import GrayImg from '../../shared/gray_img'
import DescritionWithLink from '../../shared/description_with_link'

const Planet = (props) => {
    return (
        <fragment>
            <h4>{props.title}</h4>
            <DescritionWithLink description={props.description} link={props.link}/>
            <GrayImg img_url={props.img_url}/><GrayImg />
        </fragment>
    )
}

export default Planet