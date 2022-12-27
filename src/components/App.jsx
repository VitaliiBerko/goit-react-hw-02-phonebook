import { Component, Fragment } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import s from './app.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleAddContact = ({ name, number }) => {
    const { contacts } = this.state;
    Notiflix.Notify.init({
      position: 'center-top',
    });

    contacts.find(contact => contact.name === name)
      ? Notiflix.Notify.info(`${name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [
            { id: nanoid(), name: name.trim(), number},
            ...prevState.contacts,
          ],
        }));
  };

  handleDeleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  handlerFilter = e => {
    this.setState({ filter: e.target.value.trim().toLowerCase() });
  };

  render() {
    const { contacts, filter } = this.state;
    const findedContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );

    return (
      <Fragment>
        <h1 className={s.container}>Phonebook</h1>
        <ContactForm onSubmit={this.handleAddContact} />

        <h2 className={s.container}>Contacts</h2>
        <Filter value={filter} onChange={this.handlerFilter} />
        <ContactList
          contacts={findedContacts}
          onClick={this.handleDeleteContact}
        />
      </Fragment>
    );
  }
}
