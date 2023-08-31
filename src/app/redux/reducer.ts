import { combineReducers } from 'redux';

import { filterReducer } from './reducers/filter-reducer';
import { todoReducer } from './reducers/todo-reducer';

export const rootReducer = combineReducers({
  todos: todoReducer,
  filters: filterReducer,
});
