export const selectToken = state => state.auth.token;
export const selectUser = state => state.auth.user;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIfRefreshing = state => state.auth.isRefreshing;