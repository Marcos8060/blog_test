import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './features/'


export const store = configureStore({
    reducer:{
        blog: blogReducer,
    }
})