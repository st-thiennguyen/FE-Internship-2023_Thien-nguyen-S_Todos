import TodoItemModel from '../models/todo-item';
import { Tabs } from '../shared/constant/constant';
import * as ACTION_TYPES from './type';

export const addTodoItem = (item: TodoItemModel) => {
  return {
    type: ACTION_TYPES.TODO_ITEM_ADD,
    payload: item,
  };
};

export const deleteTodoItem = (id: number) => {
  return {
    type: ACTION_TYPES.TODO_ITEM_DELETE,
    payload: id,
  };
};

export const clearCompleted = () => {
  return {
    type: ACTION_TYPES.TODO_CLEAR_COMPLETED,
  };
};

export const makeCompleted = (id: number) => {
  return {
    type: ACTION_TYPES.TODO_ITEM_TOGGLE,
    payload: id,
  };
};

export const updateTitleTodoItem = (id: number, title: string) => {
  return {
    type: ACTION_TYPES.TODO_ITEM_UPDATE,
    payload: { id, title },
  };
};

export const todoCompletedAll = () => {
  return {
    type: ACTION_TYPES.TODO_ALL_COMPLETED,
  };
};

// Filter

export const filterStatusChange = (tab: Tabs) => {
  return {
    type: ACTION_TYPES.FILTER_STATUS_CHANGE,
    payload: tab,
  };
};
