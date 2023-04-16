import React, {fragment} from 'react'
import './style.css'

const Planet = () => {
    return (
        <fragment>
            <h4>Mercurio</h4>
            <p>Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar.</p>
            <img src='https://upload.wikimedia.org/wikipedia/commons/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg' className='img-planet'></img>
        </fragment>
    )
}

export default Planet