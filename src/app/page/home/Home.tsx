import React, { useState } from 'react';
import InputTodo from './components/InputTodo';
import Filter from './components/Filter';
import Todo from './components/Todo';
import TodoItem from '../../models/todo-item';
import TodoModel from '../../models/todo';

const Home = () => {
  
  const todoList = new TodoModel([]);

  const [todos, setTodos] = useState<TodoItem[]>([...todoList.items]);

  const handleAddTodo = (todo: TodoItem) => {
    todoList.addTodo(todo);
    setTodos([...todoList.items]);
  };

  const handleCompleted = (idTodo: number) => {
    todoList.completedTodo(idTodo);
    const todo = todos.find((t) => t.id === idTodo);
    todo!.done = !todo?.done;
    setTodos([...todos]);
  };

  const handleDelete = (idTodo: number) => {
    todoList.deleteTodo(idTodo);
    setTodos([...todoList.items]);
  };

  const handleFilter = (value?: boolean) => {
    setTodos(todoList.filter(value));
  };

  const handleClearCompleted = (e: React.MouseEvent) => {
    e.preventDefault();
    todoList.clearCompleted();
    setTodos([...todoList.items]);
  };

  const handleUpdateTask = (idTodo: number, title: string) => {
    todoList.updateTodo(idTodo, title);
    setTodos([...todoList.items]);
  };

  return (
    <>
      <section className='section section-todo'>
        <div className='todo-wrapper'>
          <div className='todo'>
            <h1 className='todo-title text-center'>Todo Application</h1>
            <div className='todo-content'>
              <InputTodo handleAddTodo={handleAddTodo} />
              <Filter handleFilter={handleFilter} todos={todos} />
              <Todo
                todos={todos}
                handleCompleted={handleCompleted}
                handleDelete={handleDelete}
                handleUpdateTask={handleUpdateTask}
              />
              <div className='todo-bottom '>
                <button className='btn btn-clear' onClick={handleClearCompleted}>
                  Clear Completed
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
