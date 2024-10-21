import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export const appState:AppStateType = {
    isLoading:false
}
export type AppStateType={
    isLoading:boolean
}
const slice = createSlice({
    name:"AppSlice",
    initialState:appState,
    reducers:{
        setLoading(state,action:PayloadAction<{isLoading:boolean}>){
           state.isLoading = action.payload.isLoading
        }
    }
}

)
export const appReducer = slice.reducer
export const {
   setLoading
} = slice.actions
