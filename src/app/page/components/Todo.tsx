import React from 'react';
import TodoItem from './TodoItem';
import TodoItemModel from '../../models/todo-item';

const Todo = (props: any) => {
  return (
    <>
      <div className='todo-display'>
        <ul className='todo-list'>
          {props.todos &&
            props.todos.map((todo: TodoItemModel) => {
              return (
                <TodoItem
                  todo={todo}
                  handleCompleted={props.handleCompleted}
                  handleDelete={props.handleDelete}
                  handleUpdateTask={props.handleUpdateTask}
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
