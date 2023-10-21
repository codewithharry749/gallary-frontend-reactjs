import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './slice/loginSlice'
import countReducer from './slice/counterSlice'

export const store = configureStore({
    reducer: {
        login: loginReducer,
        counter: countReducer
    },
    devTools: true
}
);