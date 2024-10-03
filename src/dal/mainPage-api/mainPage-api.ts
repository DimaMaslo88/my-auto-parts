import {instance} from "dal/instance";

export const  MainPageApi = {
    getCarInfo(){
        return instance.get('/cars')
    }
}
