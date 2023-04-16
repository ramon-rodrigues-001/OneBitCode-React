import logo from './logo.svg';
import React from 'react';

// Este é um component tipo function commun onde crio uma função que retorna um div JSX
export function HelloWorld() {
    return <h1>Hello, World!</h1>
}

// Component de function Mais... com Arrow function
export const Frase = () => {
    return (
        <p>Este é um projeto react_app, onde eu aprendo a utilizar o create-react-app, e tambem modifico para praticar os components</p>
    )
}

/* Component com mais esse não é uma function e sim uma Class
Este deve ter uma extends de React.Component e um render(){} */
export class Logo extends React.Component {
    render () {
        return <img src={logo} className='img'></img>
    }
}