import React, { Fragment, useState } from "react";

export default function FormSatellits(props) {
    
    const [nameSatellit, setNameSatellit] = useState('')
    const handleChange = (e) => setNameSatellit(e.target.value)
 
    const handleSubmit = (event) =>  {
        event.preventDefault()
        props.addSatellits({name: nameSatellit})
        setNameSatellit('')
    }

    return (
        <Fragment>
            <form>
                <div>
                    <label htmlFor="newSatellit">New Satellit: </label>
                    <input type="text" id="newSatellit" value={nameSatellit} onChange={handleChange}/>
                    <input type="submit" value="Add Satellit" onClick={handleSubmit}/>
                </div>
            </form>
        </Fragment>
    )
}