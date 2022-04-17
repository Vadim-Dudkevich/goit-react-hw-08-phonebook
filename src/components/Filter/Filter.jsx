import PropTypes from 'prop-types';
import React from 'react';
import { nanoid } from 'nanoid';
import css from './Filter.module.css';

export default function Filter({ value, onChange }) {
  let inputFilter = nanoid();
  return (
    <div className={css.filter}>
      <label className={css.filterLabel} htmlFor={inputFilter}>
        Find contacts by name
      </label>
      <input
        className={css.filterInput}
        id={inputFilter}
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

Filter.prototype = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
