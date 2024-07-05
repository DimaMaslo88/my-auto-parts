import {configureStore} from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk"

export const store = configureStore({
    reducer:{
        spareParts,
    },
    middleware:(getDefaultMiddleware) =>
        getDefaultMiddleware()
            .prepend(thunkMiddleware),


    devTools:true
})
