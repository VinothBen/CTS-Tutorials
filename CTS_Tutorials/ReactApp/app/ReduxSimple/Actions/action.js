import Axios from 'axios';
import queryString from 'query-string';
import JsonData from '../JSON/JsonData.json';

const apiToAddUsers = 'http://localhost:8022/MyBatis/add';
const apiToGetALllUser = 'http://localhost:8022/MyBatis/getAllUsers';
const apiToDeleteUser = 'http://localhost:8022/MyBatis/deleteuser';
const apiToUpdateUser = 'http://localhost:8022/MyBatis/updateuser'

export const USER_ADDED_SUCCESS = 'USER_ADDED_SUCCESS';
export const USER_ADDED_SUCCESS_TOGGLE = 'USER_ADDED_SUCCESS_TOGGLE';
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const CHANGE_TITLE = 'CHANGE_TITLE';
export const SEARCH_DATA = 'SEARCH_DATA';
export const GET_JSON_DATA = 'GET_JSON_DATA';
export const DELETE_DATA = 'DELETE_DATA';
export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER_TOGGLE = 'UPDATE_USER_TOGGLE';

export const addUsers = (data) => {
    return {
        type: USER_ADDED_SUCCESS,
        status: data

    }
};
export const addUserStatusToogle = (data) =>{
    return{
        type: USER_ADDED_SUCCESS_TOGGLE,
        status: data
    }
}
export const loadJsonData = (data) => {
    return {
        type: GET_JSON_DATA,
        items: JsonData,
        isFetching: false
    }
}

export const getAllUsers = (data) => {
    return {
        type: GET_ALL_USERS,
        items: data,
        isFetching: false,
    }
}



export const changeTitle = (data) => {
    return {
        type: CHANGE_TITLE,
        title: data
    }
}

export const searchData = (data) => {
    return {
        type: SEARCH_DATA,
        items: data
    }
}

export const deleteUser = (data) => {
    return {
        type: DELETE_DATA,
        id: data
    }
}

export const updateUser = (data) => {
    return {
        type: UPDATE_USER,
        items: data
    }
}
export const updateToggle = (data) => {
    return {
        type: UPDATE_USER_TOGGLE,
        isUpdateCompleted: data
    }
}

export const deleteUserApi = (data) => {
    return (dispatch) => {
        return Axios.get(apiToDeleteUser, { params: { id: data } })
            .then((response) => {
                console.log(response.data);
                    dispatch(deleteUser(data));
            })
            .catch((error) => {
                throw (error.message);
                console.log(error.message);
            })
    }
}

export const updateUserApi = (data) => {
    return (dispatch) => {
        return Axios.get(apiToUpdateUser, { params: { id: data.id, name: data.name, emailId: data.emailId, phoneNumber: data.phoneNumber } }).then(response => {
            dispatch(updateUser(data));
        })
            .catch(error => {
                throw (error.message);
            });
    }
}
export const addUserApi = (data) => {
    return (dispatch) => {
        return Axios.get(apiToAddUsers, { params: { name: data.userName, emailId: data.emailId, phoneNumber: data.phoneNumber } }).then(response => {
            dispatch(addUsers(true));
        })
            .catch(error => {
                throw (error.message);
            });
    }
}

export const getAllUserApi = () => {
    return (dispatch) => {
        return Axios.get(apiToGetALllUser)
            .then((response) => {
                dispatch(getAllUsers(response.data));
            }).catch((error) => {
                console.log(error.message);
            });
    }
}