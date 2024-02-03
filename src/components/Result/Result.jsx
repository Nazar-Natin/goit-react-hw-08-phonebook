import PropTypes from 'prop-types';
import { deleteContact } from '../../redux/counter/api';
import { useDispatch } from 'react-redux';

const Result = ({ data }) => {
  const dispatch = useDispatch();
  const { id, name, number } = data;
  return (
    <li>
      <p>
        {name} 📞 {number}
      </p>
      <button
        data-id={id}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        🗑️
      </button>
    </li>
  );
};

Result.propTypes = {
  data: PropTypes.object,
};

export default Result;
