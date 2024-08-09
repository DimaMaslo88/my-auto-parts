import {createSlice} from "@reduxjs/toolkit";
import {userCarType} from "types/userCarsTypes";

const userCarsState = [] as userCarType[]
const slice=createSlice({
    name:"UserCars",
    initialState:userCarsState,
    reducers:{

    }
})
export const userCarsReducer = slice.reducer
