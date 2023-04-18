export default function Button(props) {
    return (
        <button onClick={() => props.chamarConsole(props.valor)}>
            BTN_{props.valor}
        </button>
    )
}