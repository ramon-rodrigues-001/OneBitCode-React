import React from 'react'

export default function Header(Props) {

    window.onscroll = ()=> {
        const scroll = document.documentElement.scrollTop
        
        
        if (scroll == "0") {
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