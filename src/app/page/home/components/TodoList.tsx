import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import TodoItemModel from '../../../models/todo-item';
import { saveDataToStorage } from '../../../shared/utils/utils';
import TodoItem from './TodoItem';
import { StorageKey, Tabs } from '../../../shared/constant/constant';

const TodoList = () => {
  
  const todoSelector = useSelector((state:any) => {
    switch (state.filters.status) {
      case Tabs.ALL:
        return state.todos.items;
      case Tabs.COMPLETED :
        return state.todos.items.filter(
          (item: TodoItemModel) => item.isCompleted !== false,
        );
      case Tabs.TODO :
        return state.todos.items.filter(
          (item: TodoItemModel) => item.isCompleted !== true,
        );
      default:
        return state.todos.items;
    }
  });

  useEffect(() => {
    saveDataToStorage(StorageKey.TODO,todoSelector);
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

export default TodoList;
