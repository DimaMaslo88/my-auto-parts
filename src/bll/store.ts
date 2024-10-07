import {combineReducers, configureStore} from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk"
import {userCarsReducer} from "bll/slices/userCars";
import { sparePartsReducer} from "./slices/spareParst";

const rootReducer = combineReducers({
    spareParts:sparePartsReducer,
    userCars:userCarsReducer
})
export const store = configureStore({
    reducer:rootReducer,

})
export type RootReducerType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store


