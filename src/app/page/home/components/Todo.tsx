import React, { useEffect } from 'react';
import TodoItem from './TodoItem';
import TodoItemModel from '../../../models/todo-item';
import { useSelector } from 'react-redux';
import { todoListSelector } from '../../../redux/selector';
import { saveDataToStorage } from '../../../shared/utils/utils';

const Todo = () => {
  const todoSelector = useSelector(todoListSelector);

  useEffect(() => {
    saveDataToStorage(todoSelector);
  },[todoSelector])

  return (
    <>
      <div className='todo-display'>
        <ul className='todo-list'>
          {todoSelector &&
            todoSelector.map((todo: TodoItemModel) => {
              return (
                <TodoItem
                  todo={todo}
                  key={todo.id}
                />
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default Todo;
