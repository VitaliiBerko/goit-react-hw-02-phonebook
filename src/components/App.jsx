import { Component, Fragment } from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactForm/ContactList/ContactList';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],    
  };

  
  handleChange = e => {
    const { value, name } = e.currentTarget;
    this.setState({ [name]: value });
  };

 handleAddContact =({name, number}) => {
  this.setState(prevState=> ({
    contacts: [{id: nanoid(), name: name.trim(), number}, ...prevState.contacts]
  }))
 } 

 handleDeleteContact =(id) => {
  const {contacts}= this.state
  this.setState(prevState=> {return({contacts: prevState.contacts.filter(contact=>contact.id!==id)})})
 }

  render() {
    const { contacts } = this.state;
    return (
      <Fragment>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleAddContact}/> 

        <h2>Contacts</h2>
  {/* <Filter ... /> */}
  <ContactList contacts={contacts} onClick={this.handleDeleteContact}/>          

        {/* <div>
  <h1>Phonebook</h1>
  <ContactForm ... />

  <h2>Contacts</h2>
  <Filter ... />
  <ContactList ... />
</div> */}
      </Fragment>
    );
  }
}
