import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {sparePartsStateType} from "types/sparePartsType";


const sparePartsState = [] as sparePartsStateType[]

const slice = createSlice({
    name: 'spareParts',
    initialState: sparePartsState,
    reducers: {
        setSpareParts(state, action: PayloadAction<{ value: sparePartsStateType }>) {
            state.push({...action.payload.value})
        }
    }


})

export const sparePartsReducer = slice.reducer
