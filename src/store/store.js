import { configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/lib/persistReducer";
import { authReducers } from "./auth/sliceAuth";
import { contactReducers } from "./contacts/sliceContacts";
import { filterReducer } from "./contacts/filterSlice";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage';


const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token']
}


export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducers),
        contacts: contactReducers,
        filter: filterReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
    
});

export const persistor = persistStore(store);