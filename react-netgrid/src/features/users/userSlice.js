// For help, see https://redux-toolkit.js.org/api/createAsyncThunk#examples
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import userApi from '../../api/userApi';

export const fetchAll = createAsyncThunk(
  'users/fetchAll',
  async (thunkAPI) => {
    const response = await userApi.fetchAllUsers()
    return response
  }
)

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    loading: 'idle',
    currentRequestId: undefined,
    users: []
  },
  reducers: {},
  extraReducers: {
    [fetchAll.pending]: (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
        state.currentRequestId = action.meta.requestId
      }
    },
    [fetchAll.fulfilled]: (state, action) => {
      state.users = action.payload
      state.loading = 'idle'
    },
    [fetchAll.rejected]: (state, action) => {
      const { requestId } = action.meta
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle'
        state.error = action.error
        state.currentRequestId = undefined
      }
    }
  }
});

export default userSlice.reducer;
