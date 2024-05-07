'use client'

import { createSlice } from "@reduxjs/toolkit"

export interface screenSize {
    isSmallScreen: boolean
}
const initialState: screenSize = {
    isSmallScreen : true,
}

export const screenSizeSlice = createSlice({
    name: 'screenSize',
    initialState,
    reducers: {
        setIsSmallScreen: (state, action) => {
            state.isSmallScreen = action.payload
        }
    }
})

export const {setIsSmallScreen} = screenSizeSlice.actions

export default screenSizeSlice.reducer