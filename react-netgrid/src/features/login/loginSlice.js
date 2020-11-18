// For help, see https://redux-toolkit.js.org/api/createAsyncThunk#examples
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import loginApi from '../../api/loginApi';

export const login = createAsyncThunk(
  'login/login',
  async (email, password, thunkAPI) => {
    const response = loginApi.login(email, password)
    return response
  }
)

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    currentUserName: localStorage.getItem('currentUserName'),
    currentUserToken: localStorage.getItem('currentUserToken'),
    loading: "idle",
    currentRequestId: undefined,
  },
  reducers: {
    setCurrentUsername(state, action) {
      state.currentUserName = action.payload
    },
    setLogin(state, action) {
      state.currentUserName = action.payload.currentUserName
      state.currentUserToken = action.payload.currentUserToken
      localStorage.setItem('currentUserToken', action.payload.currentUserToken) // won't be needed in the end
    },
    logout(state) {
      state.currentUserName = ""
      state.currentUserToken = ""
      localStorage.setItem('currentUserName', "")
      localStorage.setItem('currentUserToken', "")
    }
  },
  extraReducers: {
    [login.pending]: (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
        state.currentRequestId = action.meta.requestId
      }
    },
    [login.fulfilled]: (state, action) => {
      state.currentUserName = action.payload.name
      state.currentUserToken = action.payload.token
      localStorage.setItem('currentUserName', state.currentUserName)
      localStorage.setItem('currentUserToken', state.currentUserToken)

      state.loading = 'idle'
    },
    [login.rejected]: (state, action) => {
      const { requestId } = action.meta
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle'
        state.error = action.error
        state.currentRequestId = undefined
      }
    },
  }
});

export const { setCurrentUsername, setLogin, logout } = loginSlice.actions
export default loginSlice.reducer;
