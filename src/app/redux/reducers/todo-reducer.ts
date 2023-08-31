import TodoItemModel from '../../models/todo-item';
import { getDataFromStorage } from '../../shared/utils/utils';
import {
  ADD_TODO_ITEM,
  CLEAR_COMPLETED_ITEM,
  DELETE_ITEM,
  FILTER_CHECK_ALL,
  MAKE_TODO_COMPLETED,
  UPDATE_TITLE_TODO_ITEM,
} from '../type';

export interface TodoStateProps {
  items: TodoItemModel[];
}

const initialState: TodoStateProps = {
  items: getDataFromStorage(),
};

export const todoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TODO_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items],
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: [...state.items.filter((item) => item !== action.payload)],
      };
    case CLEAR_COMPLETED_ITEM:
      return {
        ...state,
        items: [...state.items.filter((item) => item.done !== true)],
      };
    case MAKE_TODO_COMPLETED:
      return {
        ...state,
        items: [
          ...state.items.map((item) => {
            if (item.id === action.payload) {
              item.done = !item.done;
            }
            return item;
          }),
        ],
      };
    case UPDATE_TITLE_TODO_ITEM:
      return {
        ...state,
        items: [
          ...state.items.map((item) => {
            if (item.id === action.payload.id) {
              item.title = action.payload.title;
            }
            return item;
          }),
        ],
      };

    case FILTER_CHECK_ALL:
      return {
        ...state,
        items: [
          ...state.items.map((item) => {
            item.done = !action.payload;
            return item;
          }),
        ],
      };
    default:
      return state;
  }
};
