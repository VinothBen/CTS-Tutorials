import * as Actions from '../Actions/action';

const INITIAL_STATE = {
    status: 'false',
    items: [],
    title: '',
    isFetching: true,
    searchItems: [],
    isUpdateCompleted: false  
};

const ChangeData = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        // case "CHANGE_DATA":
        //     return (Object.assign({}, state, {id: action.id, text: action.text} ));
        case Actions.USER_ADDED_SUCCESS:
            return (Object.assign({}, state, { status: action.status }));
        case Actions.GET_ALL_USERS:
            return (Object.assign({}, state, { items: action.items, isFetching: action.isFetching, searchItems: action.items }));
        case Actions.CHANGE_TITLE:
            return (Object.assign({}, state, { title: action.title }));
        case Actions.SEARCH_DATA:
            return (Object.assign({}, state, { searchItems: action.items }));
        case Actions.GET_JSON_DATA:
            return (Object.assign({}, state, { items: action.items, isFetching: action.isFetching, searchItems: action.items }));
        case Actions.DELETE_DATA:
            {
                const objId = action.id;
                return (Object.assign({}, state, { items: state.items.filter((item) => { return item.id !== objId }), searchItems: state.searchItems.filter((item) => { return item.id !== objId }) }));
            }
        case Actions.UPDATE_USER:
            return(Object.assign({}, state, {isUpdateCompleted: true}));
        case Actions.UPDATE_USER_TOGGLE:
           return (Object.assign({}, state, {isUpdateCompleted: action.isUpdateCompleted}));
        case Actions.USER_ADDED_SUCCESS_TOGGLE:
            return (Object.assign({}, state, {status:action.status}));
        default:
            return state
    }
}
export default ChangeData

