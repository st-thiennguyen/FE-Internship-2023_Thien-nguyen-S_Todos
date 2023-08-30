import TodoItemModel from '../models/todo-item';
import { Tabs } from '../shared/constant/constant';

export const todoListSelector = (state: any) => {
  if (state.filters.status === Tabs.ALL) {
    return state.todos.items;
  }
  if (state.filters.status === Tabs.COMPLETED) {
    return state.todos.items.filter(
      (item: TodoItemModel) => item.done !== false,
    );
  } else {
    return state.todos.items.filter(
      (item: TodoItemModel) => item.done !== true,
    );
  }
};

export const filterSelector = (state: any) => state.filters.status;

export const countTodoSelector = (state: any) =>
  state.todos.items.filter((todo: TodoItemModel) => !todo.done).length;
