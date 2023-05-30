
export default function Satellits(props) {
    if (props.img) {
        return (
            <ul>
                {props.li_satellits}
            </ul>
        )
    }
    else {
        return null
    }
}