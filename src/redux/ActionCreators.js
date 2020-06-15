import * as ActionTypes from './ActionTypes';

export const addQuestion = (question) => ({
    type : ActionTypes.ADD_QUESTION,
    payload : question
});