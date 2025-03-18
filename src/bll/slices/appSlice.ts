import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export const appState:AppStateType = {
    isLoading:false,
    isAuth:false
}
export type AppStateType={
    isLoading:boolean
    isAuth:boolean
}
const slice = createSlice({
    name:"AppSlice",
    initialState:appState,
    reducers:{
        setLoading(state,action:PayloadAction<{isLoading:boolean}>){
           state.isLoading = action.payload.isLoading
        },
        setAuth(state,action:PayloadAction<{isAuth:boolean}>){
            state.isAuth = action.payload.isAuth
        }
    }
}

)
export const appReducer = slice.reducer
export const {
   setLoading,
    setAuth
} = slice.actions
