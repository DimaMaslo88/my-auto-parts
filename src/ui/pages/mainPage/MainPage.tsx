import React, {useEffect} from 'react';
import img from 'ui/assets/images/1200x900n.webp'
import style from 'styles/mainPage/mainPage.module.scss'
import {GetUserCar} from "bll/slices/userCars";
import {useAppDispatch} from "utils/hooks";
import {selectIsLoading, selectUserCars} from "bll/selectors";
import {useSelector} from "react-redux";
import {UserCarsTypes} from "types/userCarsTypes";
import {RingLoader} from "react-spinners";
import st from "styles/spinner/spiner.module.scss"



export const MainPage = () => {
const dispatch =useAppDispatch()
    const userCars = useSelector(selectUserCars)
    const isLoading = useSelector(selectIsLoading)
    useEffect(()=>{
dispatch(GetUserCar())

    },[])
    if(isLoading) return <div className={st.spinner}><RingLoader  size={100} color='#AFD275' /></div>

        return (
            <div className={style.mainPageContainer}>
                <div>
                    {userCars.map(({ id,car,model,generation,year}:UserCarsTypes)=>(
                        <ul className={style.ul} key={id}>
                            <li className={style.li}> Название авто : {car}</li>
                            <li className={style.li}> Модель : {model}</li>
                            <li className={style.li}> Поколение :{generation}</li>
                            <li className={style.li}> Год выпуска :  {year} </li>
                        </ul>
                    ))}


                </div>
                <img src={img} alt='ford explorer 5' className={style.image}/>


            </div>
        );



};



