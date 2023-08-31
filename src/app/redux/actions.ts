import TodoItemModel from '../models/todo-item';
import { Tabs } from '../shared/constant/constant';
import {
  ADD_TODO_ITEM,
  CLEAR_COMPLETED_ITEM,
  DELETE_ITEM,
  FILTER_CHECK_ALL,
  FILTER_STATUS_CHANGE,
  MAKE_TODO_COMPLETED,
  UPDATE_TITLE_TODO_ITEM,
} from './type';

export const addTodoItem = (item: TodoItemModel) => {
  return {
    type: ADD_TODO_ITEM,
    payload: item,
  };
};

export const deleteTodoItem = (item: TodoItemModel) => {
  return {
    type: DELETE_ITEM,
    payload: item,
  };
};

export const clearCompleted = () => {
  return {
    type: CLEAR_COMPLETED_ITEM,
  };
};

export const makeCompleted = (id: number) => {
  return {
    type: MAKE_TODO_COMPLETED,
    payload: id,
  };
};

export const updateTitleTodoItem = (id: number, title: string) => {
  return {
    type: UPDATE_TITLE_TODO_ITEM,
    payload: { id, title },
  };
};
// Filter

export const filterStatusChange = (tab: Tabs) => {
  return {
    type: FILTER_STATUS_CHANGE,
    payload: tab,
  };
};

export const filterCheckAll = (check: Boolean) => {
  return {
    type: FILTER_CHECK_ALL,
    payload: check,
  };
};
