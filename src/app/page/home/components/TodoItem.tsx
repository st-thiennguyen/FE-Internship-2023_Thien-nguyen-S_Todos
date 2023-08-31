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

  const todo: TodoItemModel = props.todo;

  const [isEditable, setEditable] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChecked = (idTodo: number) => {
    dispatch(makeCompleted(idTodo));
  };

  const handleRemove = (todo: TodoItemModel) => {
    dispatch(deleteTodoItem(todo));
  };

  const handleBlurToLable = () => {
    setEditable(false);
    const newTitle = inputRef.current!.value;
    if (newTitle) {
      dispatch(updateTitleTodoItem(todo.id, newTitle));
    }
  };

  const handleDoubleClickToEdit = () => {
    setEditable(true);
  };

  const handleChangeTitle = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const newTitle = inputRef.current!.value;
      if (newTitle) {
        dispatch(updateTitleTodoItem(todo.id, newTitle));
      }
      setEditable(false);
    }
  };
  return (
    <>
      <li
        className={`todo-item d-flex item-center ${
          todo.done ? 'completed' : ''
        }`}
      >
        <input
          className="todo-check"
          type="checkbox"
          checked={todo.done}
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
            onBlur={handleBlurToLable}
          />
        ) : (
          <label className="todo-text" onDoubleClick={handleDoubleClickToEdit}>
            {todo.title}
          </label>
        )}
        <button className="btn btn-delete" onClick={() => handleRemove(todo)}>
          Delete
        </button>
      </li>
    </>
  );
};

export default TodoItem;
