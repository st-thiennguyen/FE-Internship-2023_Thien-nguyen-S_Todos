import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import TodoItemModel from '../../../models/todo-item';
import {
  deleteTodoItem,
  makeCompleted,
  updateTitleTodoItem,
} from '../../../redux/actions';

interface TodoItemComponentProps {
  todo: TodoItemModel;
}

const TodoItem = (props: TodoItemComponentProps) => {
  const dispatch = useDispatch();

  const { todo } = props;

  const [isEditable, setEditable] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChecked = (idTodo: number) => {
    dispatch(makeCompleted(idTodo));
  };

  const handleRemove = () => {
    dispatch(deleteTodoItem(todo.id));
  };

  const updateItem = () => {
    const newTitle = inputRef.current!.value.trim();
    if (newTitle) {
      dispatch(updateTitleTodoItem(todo.id, newTitle));
    }
    setEditable(false);
  }

  const handleDoubleClickToEdit = () => {
    setEditable(true);
  };

  const handleChangeTitle = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      updateItem();
    }
  };
  return (
    <li
      className={`todo-item d-flex item-center ${todo.isCompleted ? 'completed' : ''}`}
    >
      <input
        className="todo-check"
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => handleChecked(todo.id)}
      />
      {isEditable ? (
        <input
          className="todo-text todo-edit"
          ref={inputRef}
          autoFocus
          type="text"
          defaultValue={todo.title}
          onKeyDown={handleChangeTitle}
          onBlur={updateItem}
        />
      ) : (
        <label className="todo-text" onDoubleClick={handleDoubleClickToEdit}>
          {todo.title}
        </label>
      )}
      <button className="btn btn-delete" onClick={handleRemove}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
