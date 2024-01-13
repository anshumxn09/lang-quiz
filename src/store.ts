import {configureStore} from '@reduxjs/toolkit';
import { rootReducer } from './reducers/slice';

export const store = configureStore({
    reducer : {
        rootReducer
    }
})