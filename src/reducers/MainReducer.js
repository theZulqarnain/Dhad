import {DATALIST , OPEN_SIDEBAR , DARK_THEME  } from '../constants/index';
const INITIAL_STATE = {
    data_list:['first','second'] ,
    openSideBar: false ,
    darkTheme: false 
};
export default  (state=INITIAL_STATE,action) => {
    switch(action.type) {
        case DATALIST:
            return {...state,data_list:action.payload};
        case OPEN_SIDEBAR:
            return {...state,openSideBar:action.payload};
        case DARK_THEME:
            return {...state,darkTheme:action.payload};
        default:
            return state;
    }
}
