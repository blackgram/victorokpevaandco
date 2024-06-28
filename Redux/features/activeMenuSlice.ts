'use client'

import { createSlice } from "@reduxjs/toolkit"

export interface activeMenu {
    activeMenu: string
}

const initialState: activeMenu = {
    activeMenu: "home"
}

export const activeMenuSlice = createSlice({
    name: 'activeMenu',
    initialState,
    reducers: {
        setActiveMenu: (state, action) => {
            state.activeMenu = action.payload
        }
    }
})

export const {setActiveMenu} = activeMenuSlice.actions

export default activeMenuSlice.reducer