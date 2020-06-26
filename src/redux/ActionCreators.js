import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const addUser = (user) =>({
	type: ActionTypes.ADD_USER,
	payload:user
});

export const postUser = (firstname,lastname,username,password) => (dispatch) => {
    const newUser = {
        firstname:firstname,
        lastname:lastname,
        username:username,
        password:password
    };
    
    return fetch(baseUrl + 'users', {
        method: "POST",
        body: JSON.stringify(newUser),
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
    .then(response => dispatch(addUser(response)))
    .catch(error =>  { console.log('post users', error.message); 
    alert('User cannot be Registered '+error.message); });
};

export const fetchInfo = () => (dispatch) => {

  dispatch(infoLoading(true));

  return fetch(baseUrl + 'matchInfo')
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
          var errmess = new Error(error.message);
          throw errmess;
    })
  .then(response => response.json())
  .then(information => dispatch(addInformation(information)))
  .catch(error => dispatch(infoFailed(error.message)));
}

export const infoLoading = () => ({
  type: ActionTypes.INFO_LOADING
});

export const infoFailed = (errmess) => ({
  type: ActionTypes.INFO_FAILED,
  payload: errmess
});

export const addInformation = (information) => ({
  type: ActionTypes.ADD_INFORMATION,
  payload: information
});

export const addInfo = (newInfo) =>({
	type: ActionTypes.ADD_INFO,
	payload: newInfo
});

export const postMatch = (element) => (dispatch) => {
  const newInfo = {
    elements : element 
  };
  
  return fetch(baseUrl + 'matchInfo', {
      method: "POST",
      body: JSON.stringify(newInfo),
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
  .then(response => dispatch(addInfo(response)))
  .catch(error =>  { console.log('Post Info.', error.message); 
  alert('Info cannot be posted '+error.message); });
};

export const fetchScenarios = () => (dispatch) => {

  dispatch(scenariosLoading(true));

  return fetch(baseUrl + 'scenarioInfo')
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
          var errmess = new Error(error.message);
          throw errmess;
    })
  .then(response => response.json())
  .then(scenarios => dispatch(addScenarios(scenarios)))
  .catch(error => dispatch(scenariosFailed(error.message)));
}

export const scenariosLoading = () => ({
  type: ActionTypes.SCENARIOS_LOADING
});

export const scenariosFailed = (errmess) => ({
  type: ActionTypes.SCENARIOS_FAILED,
  payload: errmess
});

export const addScenarios = (scenarios) => ({
  type: ActionTypes.ADD_SCENARIOS,
  payload: scenarios
});

export const addScenario = (newScenario) =>({
	type: ActionTypes.ADD_SCENARIO,
  payload: newScenario
});

export const postScenario = (category,scenario,stmt1,stmt2,stmt3,cstmt1,cstmt2,cstmt3) => (dispatch) => {
  const newScenario = {
      category : category,
      scenario : scenario,
      stmt1 : stmt1,
      stmt2 : stmt2,
      stmt3 : stmt3,
      cstmt1 : cstmt1,
      cstmt2 : cstmt2,
      cstmt3 : cstmt3, 
  };
  
  return fetch(baseUrl + 'scenarioInfo', {
      method: "POST",
      body: JSON.stringify(newScenario),
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
  .then(response => dispatch(addScenario(response)))
  .catch(error =>  { console.log('post scenari info', error.message); 
  alert('Scenario cannot be posted '+error.message); });
};

export const fetchQuestions = () => (dispatch) => {

  dispatch(questionsLoading(true));

  return fetch(baseUrl + 'questions')
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
          var errmess = new Error(error.message);
          throw errmess;
    })
  .then(response => response.json())
  .then(questions => dispatch(addQuestions(questions)))
  .catch(error => dispatch(questionsFailed(error.message)));
}

export const questionsLoading = () => ({
  type: ActionTypes.QUESTIONS_LOADING
});

export const questionsFailed = (errmess) => ({
  type: ActionTypes.QUESTIONS_FAILED,
  payload: errmess
});

export const addQuestions = (questions) => ({
  type: ActionTypes.ADD_QUESTIONS,
  payload: questions
});

export const addQuestion = (question) => ({
    type : ActionTypes.ADD_QUESTION,
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
