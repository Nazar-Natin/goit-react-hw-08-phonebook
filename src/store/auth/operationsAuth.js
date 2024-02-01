import { createAsyncThunk } from "@reduxjs/toolkit";
import { clearAuthHeader, logIn, logOut, setAuthHeader, signUp } from "store/api";
import axios from "axios";

export const signUpThunk = createAsyncThunk('auth/signup', async (data, thunkAPI) => {
    try {
        console.log(data);
        const response = await signUp(data);
        console.log(response);
        setAuthHeader(response.token);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const logInThunk = createAsyncThunk('auth/login', async (data, thunkAPI) => {
    try {
        const response = await logIn(data);
        setAuthHeader(response.token);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const logOutThunk = createAsyncThunk('auth/logout', async (data, thunkAPI) => {
    try {
        const response = await logOut(data);
        clearAuthHeader();
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
        setAuthHeader(persistedToken);
        const response = await axios.get('users/me');
        console.log(response);
        return response.data
    } catch (err) {
        return thunkAPI.rejectWithValue(err.response.data.error)
    }
});

