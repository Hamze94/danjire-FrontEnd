import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cartSlice';
import authReducer from './features/authSlice';
import salesReducer from './features/salesSlice';

export const store = configureStore({
    reducer: {
        cartReducer,
        authReducer,
        sales: salesReducer,
    }
});
