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
    
        let altura = document.documentElement.scrollHeight - document.documentElement.clientHeight
    
        let rolagem = (scroll / altura) * 100
    
        alert(rolagem)
        
        this.setState(state => ({
            Scroll: rolagem
        }))
    }

    chamarScroll = window.onscroll = ()=> {
        scroll = functionScroll
    }

    render() {
        if (this.state.Scroll == '0') {
            return (
                <header id="header">
                    <nav id='nav'>
                        <h2>Logo</h2>
                    </nav>
                    <div id='extensao_nav'>
                        
                    </div>
                </header>
            )
        }
        else {
            return (
                <header id="header">
                    <nav id='nav'>
                        <h2>Logo</h2>
                    </nav>
                </header>
            )
        }
    }
}