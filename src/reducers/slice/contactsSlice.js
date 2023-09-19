import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    getContactList: [],
    getContactDetail: false,
    getResponseAddContact: 0,
    errorMessage: false,
}

export const contacts = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        getContacts: (state, action) => {
            state.getContactList = action.payload;
            // state.errorMessage = action.errorMessage;
        },
        getContactsById: (state, action) => {
            state.getContactDetail = action.payload;
        },
        getResponseAddContact: (state, action) => {
            state.getResponseAddContact = action.payload;
        }
    }
});

export const {getContacts, getContactsById, getResponseAddContact } = contacts.actions;

export default contacts.reducer;

