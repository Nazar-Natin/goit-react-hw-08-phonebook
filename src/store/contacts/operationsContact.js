import { createAsyncThunk } from "@reduxjs/toolkit";
import { setAuthHeader } from "store/api";
import { addContact, deleteContact, fetchAllContacts } from "store/api";

export const fetchContactsThunk = createAsyncThunk('contacts/fetchall', async (_, thunkAPI) => {
    try {
        setAuthHeader(thunkAPI.getState().auth.token);
        const response = await fetchAllContacts();
        console.log(response);
        return response;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
});

export const addContactThunk = createAsyncThunk('contacts/addcontact', async ({ name, number }, thunkAPI) => {
    try {
        const response = await addContact({ name, number });
        return response;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
});

export const deleteContactThunk = createAsyncThunk('contacts/deletecontact', async (contactId, thunkAPI) => {
    try {
        const response = await deleteContact(contactId);
        return response;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
});


