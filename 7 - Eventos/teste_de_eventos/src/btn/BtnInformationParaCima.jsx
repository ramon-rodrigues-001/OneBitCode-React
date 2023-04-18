import Button from "./BtnInformationParaCima/Button";

export default function BtnInFormaTionParaCima(props) {
    function chamarConsole() {
        console.log(props.valor)
    }

    return (
        <Button 
            chamarConsole={chamarConsole}
            valor={props.valor}
        />
    )
}