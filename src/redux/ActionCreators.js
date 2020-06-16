import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const addQuestion = (question) => ({
    type : ActionTypes.ADD_QUESTIONS,
    payload : question
});

export const postQuestion = (category, question , comment, option1, option2, option3, option4, answer) => (dispatch) => {

    const newQuestion = {
        category: category,
        question: question,
        options: {
            option1 : option1,
            option2 : option2,
            option3 : option3,
            option4 : option4
        },
        answer: answer,
        comment: comment,
    };
    
    return fetch(baseUrl + 'questions', {
        method: "POST",
        body: JSON.stringify(newQuestion),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(response => dispatch(addQuestion(response)))
    .catch(error =>  { console.log('post questions', error.message); alert('Your question could not be posted\nError: '+error.message); });
};
