import { combineReducers } from "redux";
import { screenSizeSlice } from "../features/screenSizeSlice";


export const rootReducer = combineReducers({
    screenSize: screenSizeSlice.reducer
})