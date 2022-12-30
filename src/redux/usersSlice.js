import { createSlice } from '@reduxjs/toolkit';
import { getUsers } from './usersOperations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const usersSlise = createSlice({
  name: 'users',
  initialState: {
    usersData: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [getUsers.pending]: handlePending,
    [getUsers.rejected]: handleRejected,
    [getUsers.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.usersData = payload;
    },
  },
});

export const usersReducer = usersSlise.reducer;
