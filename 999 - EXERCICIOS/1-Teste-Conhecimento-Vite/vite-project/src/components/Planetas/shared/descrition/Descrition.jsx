export default function Descrition(props) {
    if (props.title && props.img) {
        return (
            <p id="paragrafh">{props.paragrafh}</p>
        )
    }
    else {
        return (
            <h3>Sem outra informação importante não tem <u>descrition</u></h3>
        )
    }
}