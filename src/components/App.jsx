import React, { Component } from 'react';
import { nanoid } from 'nanoid';
// import { css } from 'styled-components';
import css from './App.module.css';
import Section from './Section';
import ContactForm from './ContactForm';
// import { render } from '@testing-library/react';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  addContact = data => {
    const { name, number } = data;
    const { contacts } = this.state;

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    contacts.some(contact => contact.name === name)
      ? alert(`${name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
  };

  render() {
    const addContact = this.addContact;

    return (
      <div className={css.phonebook}>
        <Section>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={addContact} />
        </Section>
      </div>
    );
  }
}

export default App;
