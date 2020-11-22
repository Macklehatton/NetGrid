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
      state.currentUserName = action.payload;
    },
    setLogin(state, action) {
      let currentUserToken = action.payload.currentUserToken;
      let currentUserName = action.payload.currentUserName;

      state.currentUserName = currentUserName;
      state.currentUserToken = currentUserToken;

      localStorage.setItem('currentUserToken', currentUserToken);
    }
  },
  extraReducers: {
    [login.pending]: (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending';
        state.currentRequestId = action.meta.requestId;
      }
    },
    [login.fulfilled]: (state, action) => {
      state.currentUserName = action.payload.name;
      state.currentUserToken = action.payload.token;
      localStorage.setItem('currentUserName', state.currentUserName);
      localStorage.setItem('currentUserToken', state.currentUserToken);
      localStorage.setItem('lastAuthentication', new Date());

      let expBase64 = state.currentUserToken.split('.')[1];
      let json = JSON.parse(atob(expBase64));
      let exp = json.exp;
      localStorage.setItem('currentUserTokenExpiration', exp);

      state.loading = 'idle';
    },
    [login.rejected]: (state, action) => {
      const { requestId } = action.meta
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle';
        state.error = action.error;
        state.currentRequestId = undefined;
      }
    },
  }
});

export const { setCurrentUsername, setLogin } = loginSlice.actions
export default loginSlice.reducer;


export function logout(state) {
  localStorage.removeItem('currentUserName');
  localStorage.removeItem('currentUserToken');
  localStorage.removeItem('currentUserTokenExpiration');
  state.currentUserName = "";
  state.currentUserToken = "";
}

// returns false if we're logged in, but the token is expired
// returns false if we've never logged in
export function loggedInWithUnexpiredToken() {
  if (localStorage.getItem("currentUserTokenExpiration") === null) return false;

  let expirationDate = new Date(parseInt(localStorage.getItem("currentUserTokenExpiration")) * 1000 );
  let now = new Date();
  let isntExpired = (now - expirationDate) < 5 * 60 * 1000  // Expires in 5 minutes apparently...

  return isntExpired;
}

export function weAreLoggedIn() {
  if (localStorage.getItem("currentUserName") === null) return false;
  return true;
}

export function logoutIfExpired() {
  let expirationDate = new Date(parseInt(localStorage.getItem("currentUserTokenExpiration")) * 1000 );
  let now = new Date();
  let isExpired = (now - expirationDate) > 5 * 60 * 1000  // Expires in 5 minutes apparently...

  if (isExpired) {
    debugger;
    logout();
  }
}
