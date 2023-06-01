import { Fragment, useState } from "react";

export default function Form(props) {
    const [fields, setFields] = useState({
        id: '',
        Title: '',
        Paragrafh: '',
        Link: '',
        Img: ''
    })

    const handleChange = (event) => {
        setFields({
            ...fields,
            [event.currentTarget.name]: event.currentTarget.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.addPlanet(fields)
    }

    return (
        <Fragment>
            <br />
            <form action='#'>
                <div>
                    <label htmlFor="id">Id: </label>
                    <input type="text" name="id" id="id" value={fields.id} onChange={handleChange} /> <br /><br />

                    <label htmlFor="Title">Name: </label>
                    <input type="text" name="Title" id="Title" value={fields.name} onChange={handleChange} /> <br /><br />

                    <label htmlFor="Paragrafh">Descrition: </label>
                    <input type="text" name="Paragrafh" id="Paragrafh" value={fields.Paragrafh} onChange={handleChange} /> <br /><br />

                    <label htmlFor="Link">Link: </label>
                    <input type="text" name="Link" id="Link" value={fields.Link} onChange={handleChange} /> <br /><br />

                    <label htmlFor="Img">Img: </label>
                    <input type="text" name="Img" id="Img" value={fields.Img} onChange={handleChange} />
                </div> <br />
                <input type="submit" value="Criar Planeta" onClick={handleSubmit}/>
            </form>
            <br />
        </Fragment>
    )
}