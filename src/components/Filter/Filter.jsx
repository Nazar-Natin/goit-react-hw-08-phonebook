import React from 'react';
import { useDispatch } from 'react-redux';
import { setQ } from '../../redux/counter/itemSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const searchFocus = () => {
    document.querySelector('form').style.display = 'none';
  };

  const searchOffFocus = () => {
    document.querySelector('form').style.display = 'flex';
  };

  const filterItem = e => {
    return dispatch(setQ(e.target.value));
  };

  return (
    <div>
      <h2>Find contact by name</h2>
      <input
        type="text"
        name="search"
        onChange={filterItem}
        onFocus={searchFocus}
        onBlur={searchOffFocus}
      />
    </div>
  );
};

export default Filter;
