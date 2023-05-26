
export default function Planetas(props) {
    if (props.title && props.img && props.paragrafh) {
        <p>Fim</p>
    }
    else {
        return (
            <a href={props.link}>Informação incompreta para mais detalhes click aqui</a>
        )
    }
}