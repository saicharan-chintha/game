import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Questions } from './questions';
import { Scenarios } from './scenarios';
import { Information } from './info';
import { Users } from './users';
import { createForms } from 'react-redux-form';
import { initialInfoForm } from './forms';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            users:Users,
            questions: Questions,
            scenarios: Scenarios,
            information : Information,
            ...createForms({
                infoForm : initialInfoForm
            })
        }),
        applyMiddleware(thunk,logger)
    );
    return store;
};

