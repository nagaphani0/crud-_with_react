import { configureStore } from '@reduxjs/toolkit';
import userReducer from './MySlices';

const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

export default store;
