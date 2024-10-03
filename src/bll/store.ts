import {combineReducers, configureStore} from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk"
import { sparePartsReducer} from "./slices/spareParst";

const rootReducer = combineReducers({
    spareParts:sparePartsReducer
})
export const store = configureStore({
    reducer:rootReducer,

})
export type RootReducerType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store


