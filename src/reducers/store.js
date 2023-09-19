import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from './slice/contactsSlice';

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
    },
});