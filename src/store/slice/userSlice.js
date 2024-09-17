import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  user: null,
  token: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      const { token, user } = action.payload;
      state.isLoggedIn = true;
      state.user = user;
      state.token = token;
      localStorage.setItem('token', token);
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.token = null;
      localStorage.removeItem('token');
    },
    setUserFromLocalStorage: (state, action) => {
      const { token, user } = action.payload;
      state.isLoggedIn = true;
      state.token = token;
      state.user = user;
    },
  },
});

export const { login, logout, setUserFromLocalStorage } = userSlice.actions;

export default userSlice.reducer;
