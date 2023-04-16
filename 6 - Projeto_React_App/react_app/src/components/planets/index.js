import Planet from './planet'
import './style.css'

const Planets = () => {
    return (
        <div className='div-planets'>
            <h2>Planets</h2>
            <hr />
            <Planet />
            <Planet />
        </div>
    )
}

export default Planets