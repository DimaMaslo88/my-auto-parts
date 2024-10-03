import React, {useEffect} from 'react';
import img from 'ui/assets/images/1200x900n.webp'
import style from 'styles/mainPage/mainPage.module.scss'
import {useDispatch} from "react-redux";
import { setCarInfo } from 'bll/slices/userCars';
import {userCarType} from "types/userCarsTypes";

const obj:userCarType[] = [
    {
    id: 1,
    car: 'Volga',
    model: '123',
    generation: 3,
    year: 2000
},
    {
        id: 1,
        car: 'Volga',
        model: '123',
        generation: 3,
        year: 2000
    }
]
export const MainPage = () => {
const dispatch =useDispatch()
    useEffect(()=>{
        dispatch(setCarInfo(obj))
    },[])
    return (
        <div className={style.mainPageContainer}>
            <div>
                <ul className={style.ul}>
                    <li className={style.li}> Название авто</li>
                    <li className={style.li}> Год Выпуска</li>
                    <li className={style.li}> Тип Двигателя</li>
                    <li className={style.li}> Привод</li>
                </ul>

            </div>
            <img src={img} alt='ford explorer 5' className={style.image}/>


        </div>
    );
};



