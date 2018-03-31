import * as Constatnts from '../Constants/index';
export const logIn = (data) =>{
    return{
        type : Constatnts.LOGIN_VERIFICATION,
        data
    }
}
export const logOut = (data) =>{
    return{
        type:Constatnts.LOGUT_USER 
    }
}

