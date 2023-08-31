import TodoItemModel from '../../models/todo-item';
import { StorageKey } from '../../shared/constant/constant';
import { getDataFromStorage } from '../../shared/utils/utils';
import * as ACTION_TYPES from '../type';

export interface TodoStateProps {
  items: TodoItemModel[];
}

const initialState: TodoStateProps = {
  items: getDataFromStorage(StorageKey.TODO),
};

export const todoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ACTION_TYPES.TODO_ITEM_ADD:
      return {
        ...state,
        items: [action.payload, ...state.items],
      };
    case ACTION_TYPES.TODO_ITEM_DELETE:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case ACTION_TYPES.TODO_CLEAR_COMPLETED:
      return {
        ...state,
        items: state.items.filter((item) => item.isCompleted !== true),
      };
    case ACTION_TYPES.TODO_ITEM_TOGGLE:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload) {
            item.isCompleted = !item.isCompleted;
          }
          return item;
        }),
      };
    case ACTION_TYPES.TODO_ITEM_UPDATE:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload.id) {
            item.title = action.payload.title;
          }
          return item;
        }),
      };

    case ACTION_TYPES.TODO_ALL_COMPLETED:
      const checkAllTodos = state.items.every(
        (item) => item.isCompleted === true,
      );
      return {
        ...state,
        items: state.items.map((item) => {
          item.isCompleted = checkAllTodos ? false : true;
          return item;
        }),
      };
    default:
      return state;
  }
};
