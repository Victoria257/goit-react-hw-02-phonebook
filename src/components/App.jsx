import React, { Component } from "react";
import Form from 'components/Form/Form';
import { Contacts } from 'components/Contacts/Contacts'
import { nanoid } from 'nanoid'

class App extends Component {
  
state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  name: '',
  number: ''
}
  
  formSubmitHandler = data => {
    console.log(data);
  }

  
  addContacts = (text) => {
    const contact = {
    id: nanoid(7),
    name: text.name,
    number:text.number,
    }
    
    this.setState(prevState => ({
      contacts:[contact, ...prevState.contacts]
    }))
  }
  
  render() {
    return (
      <div>
      <Form onSubmit={this.formSubmitHandler} addContacts={ this.addContacts} />
        <Contacts contacts={this.state.contacts}/>
        </div>
    )
  }
};

export default App