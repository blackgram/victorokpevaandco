import { combineReducers } from "redux";
import { screenSizeSlice } from "../features/screenSizeSlice";
import {activeMenuSlice} from "../features/activeMenuSlice";


export const rootReducer = combineReducers({
    screenSize: screenSizeSlice.reducer,
    activeMenu: activeMenuSlice.reducer,
})