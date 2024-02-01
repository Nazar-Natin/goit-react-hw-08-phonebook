import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUpThunk } from 'store/auth/operationsAuth';

export const SignupForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      signUpThunk({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
    navigate('/contacts');
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Name</p>
          <input type="text" name="name" placeholder="Enter your name" />
        </label>
        <label>
          <p>Email</p>
          <input type="email" name="email" placeholder="Enter your email" />
        </label>
        <label>
          <p>Password </p>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
