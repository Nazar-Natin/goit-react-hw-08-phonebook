import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOutThunk } from 'store/auth/operationsAuth';

export const LogoutForm = ({ email }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(logOutThunk());
    navigate('/login');
  };

  const handleNav = () => {
    navigate('/contacts');
  };

  return (
    <>
      <li>
        <button type="button" onClick={handleClick}>
          Log Out
        </button>
      </li>
      <li>
        <button type="button" onClick={handleNav}>
          Contacts
        </button>
      </li>
    </>
  );
};
