import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import { toast } from 'react-toastify';

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
      items: [],
      isLoading: false,
      error: null,
    },
    extraReducers: {
      [fetchContacts.pending](state) {
        state.isLoading = true;
      },
      [fetchContacts.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      },
      [fetchContacts.rejected](state, action) {
        state.isLoading = false;
        state.error = action.payload;
      },
      [addContact.pending](state) {
        state.isLoading = true;
      },
      [addContact.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
        toast.success('Contact added!');
      },
      [addContact.rejected](state, action) {
        state.isLoading = false;
        state.error = action.payload;
      },
      [deleteContact.pending](state) {
        state.isLoading = true;
      },
      [deleteContact.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
            //contact => contact.id === action.payload.id
            contact => contact._id === action.payload
        );
        state.items.splice(index, 1);
        toast.info('Contact has been deleted!');
      },
      [deleteContact.rejected](state, action) {
        state.isLoading = false;
        state.error = action.payload;
      },
  
    },
  });
  
  export const contactsReducer = contactsSlice.reducer;