// import PropTypes from 'prop-types';

import React, { useState } from 'react';
import { useGetContactsQuery } from '../../redux/contactsSlice';
import { useAddContactMutation } from '../../redux/contactsSlice';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { Report } from 'notiflix';
import Notiflix from 'notiflix';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { data } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const inputNameId = nanoid();
  const inputNumberId = nanoid();

  const handleNameChange = event => setName(event.target.value);
  const handleNumberChange = event => setNumber(event.target.value);

  const handleAddContact = async values => {
    try {
      await addContact(values);
      Notiflix.Notify.success('Contact added');
    } catch (error) {
      Notiflix.Notify.failure('Oops, something goes wrong');
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    data.some(contact => contact.name === name)
      ? Report.warning(
          `${name} is already in contacts`,
          'Please enter another name'
        )
      : handleAddContact({ name, number });

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label} htmlFor={inputNameId}>
        <span className={css.title}>Name</span>
        <input
          className={css.input}
          onChange={handleNameChange}
          id={inputNameId}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.label} htmlFor={inputNumberId}>
        <span className={css.title}>Number</span>
        <input
          className={css.input}
          onChange={handleNumberChange}
          id={inputNumberId}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
