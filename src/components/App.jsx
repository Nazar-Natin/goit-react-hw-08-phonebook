import { Route, Routes } from 'react-router-dom';
import { Layout } from 'pages/Layout/Layout';
import { Login } from 'pages/LoginPage';
import { PrivateRoute, RestrictedRoute } from './guards';
import { Signup } from 'pages/SignupPage';
import { Contacts } from 'pages/ContactsPage';
import { Home } from 'pages/HomePage/HomePage';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { refreshUser } from 'store/auth/operationsAuth';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefresing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefresing ? (
    <p>Refresing user ...</p>
  ) : (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="signup"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Signup />} />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};
