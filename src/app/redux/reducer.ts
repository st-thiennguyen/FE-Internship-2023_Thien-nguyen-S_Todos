import {combineReducers} from 'redux';
import { todoReducer } from './reducers/todo-reducer';
import { filterReducer } from './reducers/filter-reducer';

export const rootReducer = combineReducers({
    todos : todoReducer,
    filters : filterReducer
});
