import { nanoid } from 'nanoid';
import css from './FormUser.module.css';
import React, { useState } from 'react'

const FormUser = ({sendUserData}) => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
   
    const handleChange = ({ target: { name, value } }) => {
        if (name === 'name') setName(value)
        else setNumber(value)
    }
    
    const handlerSubmit = (evt) => {
        evt.preventDefault();
        const newContact = {
            id: nanoid(),
            name: name,
            number: number
         }
        sendUserData(newContact);

        evt.target.elements.name.value = "";
        evt.target.elements.number.value = "";
    }

    return (
        <>
            <form onSubmit={handlerSubmit} className={css.formuser}>
                <label htmlFor="name">Name</label>
                <input onChange={handleChange} type="text" name="name" required />
                <label htmlFor="number">Number</label>
                <input onChange={handleChange} type="tel" name="number" required />
                <button type="submit">Add contact</button>
            </form>
        </>
    )
}

export default FormUser
