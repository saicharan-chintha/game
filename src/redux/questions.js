import * as ActionTypes from './ActionTypes';

export const Questions = (state = {
    isLoading: true,
    errMess: null,
    questions:[]},action) => {
        switch(action.type) {
            case ActionTypes.ADD_QUESTION :
                var question = action.payload;
                return {...state, questions: state.questions.concat(question)};

            case ActionTypes.ADD_QUESTIONS:
                return {...state, isLoading: false, errMess: null, questions: action.payload};
            
            case ActionTypes.QUESTIONS_LOADING:
                return {...state, isLoading: true, errMess: null, questions: []}
            
            case ActionTypes.QUESTIONS_FAILED:
                return {...state, errMess: action.payload};

            default:
                return state;
        }
};