import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userSlice from '../features/users/userSlice';
import loginSlice from '../features/login/loginSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    users: userSlice,
    login: loginSlice,
  },
});
