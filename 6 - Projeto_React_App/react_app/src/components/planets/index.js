import Planet from './planet'
import './style.css'

const Planets = () => {
    return (
        <div className='div-planets'>
            <h2>Planets</h2>
            <hr />
            <Planet 
                title="Mercurio"
                description="Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres."
                link="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
                img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg"
            />
            <Planet 
                title="Plutão"
                description="Plutão, formalmente designado 134340 Plutão (símbolos: ⯓ e ♇) é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto"
                link="https://pt.wikipedia.org/wiki/Plut%C3%A3o"
                img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/280px-Pluto_in_True_Color_-_High-Res.jpg"
            />
        </div>
    )
}

export default Planets

// Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres.

