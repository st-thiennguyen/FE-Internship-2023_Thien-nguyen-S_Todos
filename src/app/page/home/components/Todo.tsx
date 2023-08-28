import React from 'react';
import TodoItem from './TodoItem';
import TodoItemModel from '../../../models/todo-item';

interface TodoComponentProps{
  todos : TodoItemModel[],
  handleCompleted : Function,
  handleDelete : Function,
  handleUpdateTask : Function
}

const Todo = (props: TodoComponentProps) => {
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
