import { useAuth } from "hooks/useAuth";
import { Navigate } from "react-router-dom";


export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {

    const { isLoggedIn, isRefreshing } = useAuth();
    const shouldRedirect = !isLoggedIn && isRefreshing;
    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
    const {isLoggedIn} = useAuth();
    return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};