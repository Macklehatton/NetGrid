import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import usersApi from '../../api/usersApi';

export const fetchAll = createAsyncThunk(
  'users/fetchAll',
  async (thunkAPI) => {
    const response = await usersApi.fetchAllUsers()
    return response
  }
)


export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    loading: 'idle',
    users: []
  },
  reducers: {
    usersLoading(state, action) {
      // UNUSED
      // Use a "state machine" approach for loading state instead of booleans
      if(state.loading === 'idle') {
        state.loading = 'pending'
      }
    },
    usersReceived(state, action) {
      // UNUSED
      if(state.loading === 'pending') {
        state.loading = 'idle'
        state.users = action.payload
      }
    }
  },
  extraReducers: {
    [fetchAll.fulfilled]: (state, action) => {
      state.users = action.payload
      // Add user to the state array
      // state.entities.push(action.payload)
    }
  }
});

const { usersLoading, usersReceived } = usersSlice.actions;

// export const fetchAll = () => async dispatch => {
//     dispatch(usersLoading());
//     const response = await usersApi.fetchAll()
//     dispatch(usersReceived(response.data));
// }

export default usersSlice.reducer;
