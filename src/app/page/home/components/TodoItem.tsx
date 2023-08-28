import React, { useRef, useState } from 'react';
import TodoItemModel from '../../../models/todo-item';


interface TodoItemComponentProps{ 
  todo:TodoItemModel,
  handleCompleted : Function,
  handleDelete : Function,
  handleUpdateTask  :Function,
}

const TodoItem = (props: TodoItemComponentProps) => {
  const todo: TodoItemModel = props.todo;

  const [isEditable, setEditable] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChecked = (idTodo: number) => {
    props.handleCompleted(idTodo);
  };

  const handleRemove = (idTodo: number) => {
    props.handleDelete(idTodo);
  };

  const handleBlurToLable = () => {
    setEditable(false);
    const newTitle = inputRef.current!.value;
    props.handleUpdateTask(todo.id, newTitle);
    
  };

  const handleDoubleClickToEdit = () => {
    setEditable(true);
  };

  const handleChangeTitle = (e: React.KeyboardEvent, idTodo: number) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const newTitle = inputRef.current!.value;
      props.handleUpdateTask(idTodo, newTitle);
    }
  };
  return (
    <>
      <li className={`todo-item d-flex item-center ${todo.done ? 'completed' : ''}`}>
        <input
          className='todo-check'
          type='checkbox'
          checked={todo.done}
          onChange={() => handleChecked(todo.id)}
        />
        {isEditable ? (
          <input
            className='todo-text'
            ref={inputRef}
            autoFocus
            type='text'
            defaultValue={todo.title}
            onKeyDown={(e) => handleChangeTitle(e, todo.id)}
            onBlur={handleBlurToLable}
          />
        ) : (
          <label className='todo-text' onDoubleClick={handleDoubleClickToEdit}>
            {todo.title}
          </label>
        )}
        <button className='btn btn-delete' onClick={() => handleRemove(todo.id)}>
          Delete
        </button>
      </li>
    </>
  );
};

export default TodoItem;
