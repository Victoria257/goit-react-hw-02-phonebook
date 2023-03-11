import React, { Component } from "react";
// import css from './Contacts.module.css'

class Contacts extends Component  {
   
    render() {

        return (<div>
            <h2>Contacts</h2>
            {this.props.children}
            <ul>
                {this.props.contacts.map(({ name, number, id }) => (
                    <li key={id}>{name}: {number}
                        <button type="button" onClick={()=>this.props.delContact(id)}>delete</button>
                    </li>
                ))}
            </ul>
        </div>)
    }
}

export default Contacts