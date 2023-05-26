
export default function Img(props) {
    if (props.title) {
        return (
            <img src={props.img} alt="IMG" className="img"/>
        )
    }
    else {
        return (
            <h3>IMG não encontrado</h3>
        )
    }
}