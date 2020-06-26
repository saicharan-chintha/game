import * as ActionTypes from './ActionTypes';

export const Scenarios = (state = {
    isLoading: true,
    errMess: null,
    scenarios:[]},action) => {
        switch(action.type) {
            case ActionTypes.ADD_SCENARIO :
                var scenario = action.payload;
                return {...state, scenarios: state.scenarios.concat(scenario)};

            case ActionTypes.ADD_SCENARIOS:
                return {...state, isLoading: false, errMess: null, scenarios: action.payload};
            
            case ActionTypes.SCENARIOS_LOADING:
                return {...state, isLoading: true, errMess: null, scenarios: []}
            
            case ActionTypes.SCENARIOS_FAILED:
                return {...state, errMess: action.payload};

            default:
                return state;
        }
};