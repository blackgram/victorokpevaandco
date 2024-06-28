'use client'

import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/reducers";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const screenPersistConfig = {
    key: 'screenSize',
    storage: storage,
    whitelist: "screenSize"
}

export const store = configureStore({
    reducer: {
        data: rootReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;