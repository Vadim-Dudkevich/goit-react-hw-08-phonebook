import PropTypes from 'prop-types';
import css from './ContactItem.module.css';
import { useDeleteContactMutation } from '../../redux/contactsSlice';
import { ReactComponent as IconDel } from '..//icons/delete.svg';

export default function ContactItem({ name, number, id }) {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  return (
    <>
      <span className={css.contact}>
        {name}: {number}
      </span>
      <button
        className={css.contactDelBtn}
        type="button"
        onClick={() => deleteContact(id)}
        disabled={isLoading}
      >
        <IconDel width="35" height="35" />
      </button>
    </>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
