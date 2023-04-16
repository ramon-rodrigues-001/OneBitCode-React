import logo from '../logo.svg';
import React from 'react';

/* Component com mais esse não é uma function e sim uma Class
Este deve ter uma extends de React.Component e um render(){} */
export default class Logo extends React.Component {
    render () {
        return <img src={logo} className='img'></img>
    }
}