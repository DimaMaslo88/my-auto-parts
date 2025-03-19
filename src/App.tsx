import React from 'react';
import {Header} from "ui/components/header/Header";
import {Footer} from "ui/components/footer/Footer";
import {Pages} from "ui/pages/Pages";
import {useSelector} from "react-redux";
import {selectIsAuth} from "bll/selectors";
import {Authorization} from "ui/components/authorization/Authorization";



function App() {
    const isAuth=useSelector(selectIsAuth)
    if(!isAuth){
        return (
            <div>
                <Authorization/>
            </div>
        )
    }        return (

            <div>
                <Header/>
                <Pages/>
                <Footer/>
            </div>
        );


}

export default App;
