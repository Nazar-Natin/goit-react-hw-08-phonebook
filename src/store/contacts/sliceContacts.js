import { createSlice } from "@reduxjs/toolkit";
import { addContactThunk, deleteContactThunk, fetchContactsThunk } from "./operationsContact";

export const sliceContacts = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchContactsThunk.pending, state => {
                state.isLoading = true;
            })
            .addCase(fetchContactsThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = action.payload;
                state.error = null;
            })
            .addCase(fetchContactsThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(addContactThunk.pending, state => {
                state.isLoading = true;
            })
            .addCase(addContactThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items.push(action.payload);
                state.error = null;
            })
            .addCase(addContactThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(deleteContactThunk.pending, state => {
                state.isLoading = true;
            })
            .addCase(deleteContactThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = state.items.filter(contact => contact.id !== action.payload.id);
                state.error = null;
            })
            .addCase(deleteContactThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
});

export const contactReducers = sliceContacts.reducer;