import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logInThunk } from 'store/auth/operationsAuth';
import { selectError } from 'store/contacts/selectorsContacts';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const error = useSelector(selectError);

  const handleSubmit = evt => {
    evt.prevenrDefault();
    const form = evt.currentTarget;
    dispatch(
      logInThunk({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
    if (error === null) {
      navigate('/contacts');
    }
  };

  return (
    <div>
      <h2>Log In</h2>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          <p> Email</p>
          <input type="email" name="email" placeholder="Enter email" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" name="password" placeholder="Enter password" />
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};
