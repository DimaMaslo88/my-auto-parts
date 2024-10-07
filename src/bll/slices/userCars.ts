import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {userCarType} from "types/userCarsTypes";
import {thunk} from "redux-thunk";
import {MainPageApi} from "dal/mainPage-api/mainPage-api";

const userCarsState = [] as userCarType[]

// Thunks
export const GetUserCar = createAsyncThunk('userCars/getUserCar', async (thunkAPI) => {
    try {
        await MainPageApi.getCarInfo()
    } catch (err) {
        console.log(err)
    } finally {
        console.log('he;llo')
    }
})
const slice = createSlice({
    name: "UserCars",
    initialState: userCarsState,
    reducers: {
      setCarInfo(state, action: PayloadAction<{ userCars: userCarType[]}>) {
            return action.payload.userCars.map(m => ({...m}))
        }
    },
    extraReducers: (builder => {

    })
})
export const userCarsReducer = slice.reducer
export const {
    setCarInfo
} = slice.actions
