import PropTypes from 'prop-types';
import css from './ContactItem.module.css';
import { ReactComponent as IconDel } from '..//icons/delete.svg';

export default function ContactItem({ name, number, onDelContact }) {
  return (
    <>
      <span>
        {name} {number}
      </span>
      <button
        className={css.contactDelBtn}
        type="button"
        onClick={onDelContact}
      >
        <IconDel width="35" height="35" />
      </button>
    </>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelContact: PropTypes.func.isRequired,
};
