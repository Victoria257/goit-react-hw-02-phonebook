import React, { Component } from "react";
import css from './Form.module.css'


class Form extends Component {

    state = {
        name: '',
        number: '',
    }

    handleChange = event => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]:value})
    }


    handleSubmit = event => {
        event.preventDefault()
        this.props.onSubmit({...this.state} )
        this.reset()
        this.props.addContacts({ ...this.state })
    };

    reset = () => {
        this.setState ({
            name: '',
            number: '',
    }) 
    }

    render() {
        return (
            <div className={css.formWrapper}>
                <h1>Phonebook</h1>
                <form className={css.form} onSubmit={this.handleSubmit}>
                    <label className={css.formLable}>
                        Name
                        <input
                            className={css.formInput}
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                        />
                    </label>
                    <label className={css.formLable}>
                        Phone number
                        <input
                            className={css.formInput}
                            type="tel"
                            name="number"
                            value={this.state.number}
                            onChange={this.handleChange}
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                         />
                    </label>
                    <button className={css.formBtn} type="submit" >Add contact</button>
                </form>
            </div>
        )
    }
}

export default Form