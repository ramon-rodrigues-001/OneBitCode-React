import React from 'react';

export default function Buttons() {

    function handleClick(l = 0) {
        const btn_quimera = document.querySelector('.btn_quimera')

        if (btn_quimera.innerHTML === 'CLICADO') {
            btn_quimera.innerHTML = 'NO CLICADO'
        }
        else {
            btn_quimera.innerHTML = 'CLICADO'
        }
    }

    return <button onClick={handleClick} className='btn_quimera'>
        'NO CLICADO'
    </button>
}