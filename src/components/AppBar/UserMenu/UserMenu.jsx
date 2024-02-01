import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOutThunk } from 'store/auth/operationsAuth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOutThunk())}>
        Log Out
      </button>
    </div>
  );
};
