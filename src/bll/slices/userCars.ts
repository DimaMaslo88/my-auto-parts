import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {MainPageApi} from "dal/mainPage-api/mainPage-api";
import {setLoading} from "bll/slices/appSlice";
import {UserCarsTypes} from "types/userCarsTypes";

const userCarsState = [] as UserCarsTypes[]

// Thunks
export const GetUserCar = createAsyncThunk('userCars/getUserCar', async (arg,thunkAPI) => {
thunkAPI.dispatch(setLoading({isLoading:true}))
    try {

        const res =  await MainPageApi.getCarInfo()
       const userCars = res.data
        return {userCars}
    } catch (err) {
        console.log(err)
    } finally {
        thunkAPI.dispatch(setLoading({isLoading:false}))
    }
    return false
})
const slice = createSlice({
    name: "UserCars",
    initialState: userCarsState,
    reducers: {
       setCarInfo(state, action: PayloadAction<{ userCars: UserCarsTypes[]}>) {
            return action.payload.userCars.map(m => ({...m}))
         }
    },
    extraReducers: (builder => {
builder.addCase(GetUserCar.fulfilled,(state,action)=>{
    if(action.payload){
        return action.payload.userCars.map((m:UserCarsTypes) => ({...m}))
    }
return false
})
    })
})
export const userCarsReducer = slice.reducer
export const {
setCarInfo
} = slice.actions
