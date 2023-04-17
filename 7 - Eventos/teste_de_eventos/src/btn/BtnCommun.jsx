import React from 'react';

export default function Buttons(props) {

    function handleClick() {
        alert(props.alert)
    }

    return <button onClick={handleClick}>
        btn_{props.innerText}
    </button>
}