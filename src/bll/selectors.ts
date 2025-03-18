import {RootReducerType} from "bll/store";
import {UserCarsTypes} from "types/userCarsTypes";


export const selectUserCars =(state:RootReducerType):UserCarsTypes[]=>state.userCars
export const selectIsLoading = (state:RootReducerType):boolean=>state.app.isLoading
export const selectIsAuth = (state:RootReducerType):boolean=>state.app.isAuth
export const selectIsRegistered = (state:RootReducerType):boolean=>state.app.isRegistered
