import TodoItemModel from '../../models/todo-item';
import { StorageKey } from '../constant/constant';

export const getDataFromStorage = (): TodoItemModel[] => {
  return JSON.parse(localStorage.getItem(StorageKey.TODO)!) || [];
};

export const saveDataToStorage = (items: TodoItemModel[]) => {
  localStorage.setItem(StorageKey.TODO, JSON.stringify(items));
};
