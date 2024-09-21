import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slice/userSlice';
import quizSlice from './slice/quizSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    quiz: quizSlice
  },
});

export default store;
