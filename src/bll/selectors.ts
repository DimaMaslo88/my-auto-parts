import {RootReducerType} from "bll/store";
import {UserCarsTypes} from "types/userCarsTypes";


export const selectUserCars =(state:RootReducerType):UserCarsTypes[]=>state.userCars
