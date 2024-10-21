import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {userCarsReducer} from "bll/slices/userCars";
import {appReducer} from "bll/slices/appSlice";
import { sparePartsReducer} from "./slices/spareParst";


const rootReducer = combineReducers({
    spareParts:sparePartsReducer,
    userCars:userCarsReducer,
    app:appReducer
})
export const store = configureStore({
    reducer:rootReducer,

})
export type RootReducerType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


// @ts-ignore
window.store = store


