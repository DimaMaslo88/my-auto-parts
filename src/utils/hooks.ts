import {AppDispatch} from "bll/store";
import {useDispatch} from "react-redux";
import { ThunkDispatch } from "redux-thunk";


export const useAppDispatch= () => useDispatch<ThunkDispatch<any, any, any>>()
