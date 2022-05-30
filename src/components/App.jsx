// import React, { useState, useEffect } from 'react';

import Section from './Section';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

import css from './App.module.css';

export default function App() {
  return (
    <div className={css.phonebook}>
      <Section>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2 className={css.contactTitle}>Contacts</h2>
        <Filter />
        <ContactList />
      </Section>
    </div>
  );
}
