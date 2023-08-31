import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import TodoItemModel from '../../../models/todo-item';
import { addTodoItem } from '../../../redux/actions';

const InputTodo = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    const id = new Date().getTime();
    if (inputRef.current?.value.trim()) {
      const todo: TodoItemModel = {
        id: id,
        title: inputRef.current?.value.trim(),
        isCompleted: false,
      };
      dispatch(addTodoItem(todo));
    }
    inputRef.current!.value = '';
  };

  return (
    <form onSubmit={addTodo} className="todo-form">
      <input
        ref={inputRef}
        className="todo-input"
        type="search"
        placeholder="Add new task here"
      />
    </form>
  );
};

export default InputTodo;
