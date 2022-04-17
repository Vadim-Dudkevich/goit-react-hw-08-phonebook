import PropTypes from 'prop-types';
import React from 'react';
import css from './ContactList.module.css';
import ContactItem from 'components/ContactItem';
import { ReactComponent as IconContact } from '..//icons/contact.svg';

export default function ContactList({ contacts, onDelContact }) {
  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.contactItem}>
          <IconContact width="25" height="25" fill="#faf5e6" />
          <ContactItem
            name={name}
            number={number}
            onDelContact={() => onDelContact(id)}
          />
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelContact: PropTypes.func.isRequired,
};
