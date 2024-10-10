import {combineReducers, configureStore, ThunkAction, ThunkDispatch} from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk"
import {userCarsReducer} from "bll/slices/userCars";
import { sparePartsReducer} from "./slices/spareParst";
import {useDispatch} from "react-redux";

const rootReducer = combineReducers({
    spareParts:sparePartsReducer,
    userCars:userCarsReducer
})
export const store = configureStore({
    reducer:rootReducer,

})
export type RootReducerType = ReturnType<typeof rootReducer>
// export type ActionStateType = NewsReducerActionType
//     |AppReducerActionType
export type AppDispatch = ThunkDispatch<RootReducerType,
    undefined,
    ActionStateType>;
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>()

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType,
    RootReducerType,
    undefined,
    ActionStateType>;

// @ts-ignore
window.store = store


