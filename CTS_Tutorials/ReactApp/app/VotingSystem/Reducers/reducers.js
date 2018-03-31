import * as Constants from '../Constants/index';
const INITIAL_STATE = {
    isAthunticated: false,
    userName:''
};
const Reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Constants.LOGIN_VERIFICATION:
            return (Object.assign({}, state, {isAthunticated:true, userName: action.data.userName}));
        case Constants.LOGUT_USER:
            return (Object.assign({}, state , {isAthunticated: false}));
       default:
            return state
    }
}
export default Reducer;