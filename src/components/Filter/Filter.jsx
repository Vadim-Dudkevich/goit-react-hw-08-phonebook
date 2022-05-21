// import PropTypes from 'prop-types';

import React from 'react';
import { nanoid } from 'nanoid';
import css from './Filter.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, getFilter } from 'redux/contactsSlice';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  let inputFilter = nanoid();
  const filterChange = e => dispatch(changeFilter(e.target.value));

  return (
    <div className={css.filter}>
      <label className={css.filterLabel} htmlFor={inputFilter}>
        Find contacts by name
      </label>
      <input
        className={css.filterInput}
        id={inputFilter}
        type="text"
        value={filter}
        onChange={filterChange}
      />
    </div>
  );
}

// Filter.prototype = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
