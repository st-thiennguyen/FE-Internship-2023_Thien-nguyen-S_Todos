import React from 'react';
import TodoItem from './TodoItem';
import TodoItemModel from '../../../models/todo-item';
import TodoModel from '../../../models/todo';

interface TodoComponentProps{
  todos : TodoItemModel[],
  filterStatus:String,
  handleCompleted : Function,
  handleDelete : Function,
  handleUpdateTask : Function
}

const Todo = (props: TodoComponentProps) => {
  const todoList = new TodoModel();
  const resultList = todoList.filter(props.filterStatus);
  return (
    <>
      <div className='todo-display'>
        <ul className='todo-list'>
          {resultList &&
            resultList.map((todo: TodoItemModel) => {
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
