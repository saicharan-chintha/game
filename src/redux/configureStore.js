import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Questions } from './questions';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            questions: Questions
        }),
        applyMiddleware(thunk,logger)
    );
    return store;
};

