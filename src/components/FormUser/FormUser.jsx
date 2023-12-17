import { nanoid } from 'nanoid';
import css from './FormUser.module.css';
import { Component } from "react";

class FormUser extends Component {
    state = {
        name: '',
        number: ''
    }
    
    handleChange = ({target: {name, value}}) => {
        this.setState(() => {
            return {
                [name]: value
            }
        })
    }
    
    handlerSubmit = (evt) => {
        evt.preventDefault();
        const newContact = {
            id: nanoid(),
            name: this.state.name,
            number: this.state.number
        }
        this.props.sendUserData(newContact);

        evt.target.elements.name.value = "";
        evt.target.elements.number.value = "";
    }

    render() {
        return  (
        <>
            <form onSubmit={this.handlerSubmit} className={css.formuser}>
                <label htmlFor="name">Name</label>
                <input onChange={this.handleChange} type="text" name="name" required />
                  <label htmlFor="number">Number</label>
                <input onChange={this.handleChange} type="tel" name="number" required />
                <button type="submit">Add contact</button>
            </form>
           </>);
        
    }
    
}
export default FormUser;
