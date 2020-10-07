import { createSlice } from '@reduxjs/toolkit';

import usersApi from '../../api/usersApi';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    loading: 'idle',
    users: []
  },
  reducers: {
    usersLoading(state, action) {
      // Use a "state machine" approach for loading state instead of booleans
      if(state.loading === 'idle') {
        state.loading = 'pending'
      }
    },
    usersReceived(state, action) {
      if(state.loading === 'pending') {
        state.loading = 'idle'
        state.users = action.payload
      }
    }
  },
});

const { usersLoading, usersReceived } = usersSlice.actions;

export const fetchAll = () => async dispatch => {
    dispatch(usersLoading());
    const response = await usersApi.fetchAll()
    dispatch(usersReceived(response.data));
}

export default usersSlice.reducer;
