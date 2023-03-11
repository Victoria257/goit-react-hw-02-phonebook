import React, { Component } from "react";
import css from './Contacts.module.css'

class Contacts extends Component  {
   
    render() {

        return (<div>
            <h2>Contacts</h2>
            {this.props.children}
            <ul className={css.contactsList}>
                {this.props.contacts.map(({ name, number, id }) => (
                    <li className={css.contact} key={id}>{name}: {number}
                        <button className={css.delButton} type="button" onClick={()=>this.props.delContact(id)}>delete</button>
                    </li>
                ))}
            </ul>
        </div>)
    }
}

export default Contacts