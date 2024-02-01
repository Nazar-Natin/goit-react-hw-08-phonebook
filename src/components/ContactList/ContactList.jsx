import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { selectContacts, selectFilter } from 'store/contacts/selectorsContacts';
import { deleteContactThunk } from 'store/contacts/operationsContact';

const getVisibleContacts = (contacts, filter) => {
  if (!filter) {
    return contacts;
  } else {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
};

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const visibleContacts = getVisibleContacts(contacts, filter);

  const handleDelete = contact => {
    dispatch(deleteContactThunk(contact.id));
  };
  return (
    <ul>
      {visibleContacts.map(contact => {
        return (
          <li key={contact.id}>
            <p>
              {contact.name}: {contact.phone}
            </p>
            <button
              type="button"
              id={contact.name}
              onClick={() => handleDelete(contact)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.object,
  filter: PropTypes.string,
};
