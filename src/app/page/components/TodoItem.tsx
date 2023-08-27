import React, { useRef, useState } from 'react';
import TodoItemModel from '../../models/todo-item';

const TodoItem = (props: any) => {
  const todo: TodoItemModel = props.todo;

  const [editable, setEditable] = useState(false);

  const labelRef = useRef<HTMLLabelElement>(null);

  const handleChecked = (idTodo: number) => {
    props.handleCompleted(idTodo);
  };

  const handleRemove = (idTodo: number) => {
    props.handleDelete(idTodo);
  };

  const handleBlurToLable = (e: any) => {
    (e.target as HTMLElement).style.backgroundColor = '#fff';
    setEditable(false);
  };

  const handleDoubleClickToEdit = (e: React.MouseEvent) => {
    (e.target as HTMLElement).style.backgroundColor = '#f2f2f2';
    setEditable(true);
  };

  const handleChangeTitle = (e:React.KeyboardEvent, idTodo:number) => {
    if(e.key === 'Enter'){
      e.preventDefault();
      const newTitle = labelRef.current!.textContent;
      props.handleUpdateTask(idTodo,newTitle);
    }    
  }
  return (
    <>
      <li className={`todo-item d-flex item-center ${todo.done ? 'completed' : ''}`}>
        <input
          className='todo-check'
          type='checkbox'
          checked={todo.done}
          onChange={() => handleChecked(todo.id)}
        />
        <label
          className='todo-text'
          ref={labelRef}
          contentEditable={editable}
          onDoubleClick={handleDoubleClickToEdit}
          suppressContentEditableWarning={true}
          onKeyDown={(e) => handleChangeTitle(e,todo.id)}
          onBlur={(e) => handleBlurToLable(e)}>
          {todo.title}
        </label>
        <button className='btn btn-delete' onClick={() => handleRemove(todo.id)}>
          Delete
        </button>
      </li>
    </>
  );
};

export default TodoItem;
