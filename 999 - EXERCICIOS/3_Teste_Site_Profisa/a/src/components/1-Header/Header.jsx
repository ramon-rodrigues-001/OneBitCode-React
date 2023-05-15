import React, { Component, getScroll } from 'react'

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Scroll: ''
        }
    }

    functionScroll = ()=> {
        const scroll = document.documentElement.scrollTop

        this.setState(state => ({
            Scroll: scroll
        }))
    }

    chamarScroll = window.onscroll = ()=> {
        scroll = this.functionScroll()
    }

    render() {
        if (this.state.Scroll < .5) {
            return (
                <header id="header">
                    <nav id='nav'>
                        <h1>Logo</h1>
                    </nav>
                    <div id='extensao_nav' className='ativo'>
                        <ul>
                            <li>HOME</li>
                            <li>FLORES</li>
                            <li>LOCALIDADE</li>
                            <li>AREA PIX</li>
                            <li>CONTATOS</li>
                        </ul>
                    </div>
                </header>
            )
        }
        else {
            return (
                <header id="header">
                    <nav id='nav'>
                        <h1>Logo</h1>
                    </nav>
                    <div id='extensao_nav' className='passivo'>
                        
                    </div>
                </header>
            )
        }
    }
}