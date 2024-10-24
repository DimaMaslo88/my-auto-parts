import React, {useEffect} from 'react';
import img from 'ui/assets/images/1200x900n.webp'
import style from 'styles/mainPage/mainPage.module.scss'
import {GetUserCar} from "bll/slices/userCars";
import {useAppDispatch} from "utils/hooks";




export const MainPage = () => {
const dispatch =useAppDispatch()
    useEffect(()=>{
dispatch(GetUserCar())

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



