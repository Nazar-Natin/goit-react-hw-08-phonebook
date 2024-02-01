import { useSelector } from "react-redux"
import { selectIfRefreshing, selectIsLoggedIn, selectUser } from "store/auth/selectorsAuth"

export const useAuth = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIfRefreshing);
    const user = useSelector(selectUser);

    return {
        isLoggedIn,
        isRefreshing,
        user,
    };

};