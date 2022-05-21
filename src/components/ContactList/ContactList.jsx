// import PropTypes from 'prop-types';
import React from 'react';
import css from './ContactList.module.css';
import ContactItem from 'components/ContactItem';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getContacts, getFilter } from 'redux/contactsSlice';

import { ReactComponent as IconContact } from '..//icons/contact.svg';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  const dispatch = useDispatch();

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={css.contactItem}>
          <IconContact width="25" height="25" fill="#faf5e6" />
          <ContactItem
            name={name}
            number={number}
            onDelContact={() => dispatch(deleteContact(id))}
          />
        </li>
      ))}
    </ul>
  );
}

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onDelContact: PropTypes.func.isRequired,
// };
