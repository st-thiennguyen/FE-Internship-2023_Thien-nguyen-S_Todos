import TodoItemModel from '../../models/todo-item';
import { StorageKey } from '../constant/constant';

export const getDataFromStorage = (key: StorageKey): TodoItemModel[] => {
  return JSON.parse(localStorage.getItem(key)!) || [];
};

export const saveDataToStorage = (key: StorageKey, items: TodoItemModel[]) => {
  localStorage.setItem(key, JSON.stringify(items));
};
