import React, { useMemo } from 'react';
import css from './ContactList.module.css';
import ContactItem from 'components/ContactItem';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from '../../redux/contactsSlice';
import { getFilter } from '../../redux/filterSlice';
import { ReactComponent as IconContact } from '..//icons/contact.svg';

export default function ContactList() {
  const filter = useSelector(getFilter);

  const { data, error } = useGetContactsQuery();

  const filteredContacts = useMemo(() => {
    return (
      data?.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      ) ?? []
    );
  }, [filter, data]);

  return (
    <ul className={css.contactList}>
      {error && <p>Oops, something goes wrong, please reload this page</p>}
      {filteredContacts.map(({ name, number, id }) => (
        <li key={id} className={css.contactItem}>
          <IconContact
            className={css.contactAvatar}
            width="45"
            height="45"
            fill="#faf5e6"
          />
          <ContactItem name={name} number={number} id={id} />
        </li>
      ))}
      {filteredContacts.length === 0 && (
        <p>There are no contact with this name</p>
      )}
    </ul>
  );
}
