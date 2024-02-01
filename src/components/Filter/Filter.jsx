import { useDispatch, useSelector } from 'react-redux';

import { selectFilter } from 'store/contacts/selectorsContacts';
import { addFilter } from 'store/contacts/filterSlice';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilter = evt => {
    evt.preventDefault();
    const name = evt.currentTarget.value;
    dispatch(addFilter(name));
  };

  return (
    <>
      <label>
        Find contacts by name:
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={handleFilter}
        />
      </label>
    </>
  );
};
