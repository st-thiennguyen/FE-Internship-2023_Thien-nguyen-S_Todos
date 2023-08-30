import React, { useRef } from 'react';
import TodoItemModel from '../../../models/todo-item';

interface InputTodoProps{
  handleAddTodo:Function
}

const InputTodo = (props:InputTodoProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  
  const addTodo = (e:React.FormEvent) => {
    e.preventDefault();
    const id = new Date().getTime();
    if(inputRef.current?.value){
      const todo:TodoItemModel = {
        id: id,
        title: inputRef.current?.value || '',
        done: false
      }
      props.handleAddTodo(todo);
    }
    inputRef.current!.value = ''; 
  }
  
  return (
    <>
      <form onSubmit={addTodo} className='todo-form'>
        <input ref={inputRef} className='todo-input' type='search' placeholder='Add new task here' />
      </form>
    </>
  );
};

export default InputTodo;
