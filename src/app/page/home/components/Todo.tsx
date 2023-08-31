import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import TodoItemModel from '../../../models/todo-item';
import { saveDataToStorage } from '../../../shared/utils/utils';
import TodoItem from './TodoItem';
import { Tabs } from '../../../shared/constant/constant';

const Todo = () => {
  
  const todoSelector = useSelector((state:any) => {
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
  });

  useEffect(() => {
    saveDataToStorage(todoSelector);
  }, [todoSelector]);

  return (
      <div className="todo-display">
        <ul className="todo-list">
          {todoSelector &&
            todoSelector.map((todo: TodoItemModel) => {
              return <TodoItem todo={todo} key={todo.id} />;
            })}
        </ul>
      </div>
  );
};

export default Todo;
