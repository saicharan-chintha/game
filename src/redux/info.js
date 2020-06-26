import * as ActionTypes from './ActionTypes';

export const Information = (state = {
    isLoading: true,
    errMess: null,
    information:[]},action) => {
        switch(action.type) {
            case ActionTypes.ADD_INFO :
                var info = action.payload;
                return {...state, information: state.information.concat(info)};

            case ActionTypes.ADD_INFORMATION:
                return {...state, isLoading: false, errMess: null, information : action.payload};
            
            case ActionTypes.INFO_LOADING:
                return {...state, isLoading: true, errMess: null, information: []}
            
            case ActionTypes.INFO_FAILED:
                return {...state, errMess: action.payload};

            default:
                return state;
        }
};