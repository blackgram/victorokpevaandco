'use client'

import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/reducers";

export const store = configureStore({
    reducer: {
        data: rootReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;