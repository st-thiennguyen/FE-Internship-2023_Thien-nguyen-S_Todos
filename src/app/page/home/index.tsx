import React, { useState } from 'react';
import InputTodo from './components/InputTodo';
import Filter from './components/Filter';
import Todo from './components/Todo';
import TodoItem from '../../models/todo-item';
import TodoModel from '../../models/todo';
import { StorageKey, Tabs } from '../../shared/constant/constant';

const Home = () => {

  const [todos, setTodos] = useState<TodoItem[]>(()=> JSON.parse(localStorage.getItem(StorageKey.TODO)!) || []);

  const [filterStatus, setFilterStatus] = useState<String>(Tabs.ALL);

  const todoList = new TodoModel([...todos]);

  const handleAddTodo = (todo: TodoItem) => {
    todoList.addTodo(todo);
    setTodos([...todoList.getTodo()]);
  };

  const handleCompleted = (idTodo: number) => {
    todoList.completedTodo(idTodo);
    setTodos([...todoList.getTodo()]);
  };

  const handleDelete = (idTodo: number) => {
    todoList.deleteTodo(idTodo);
    setTodos([...todoList.getTodo()]);
  };

  const handleFilter = (tab:string) => {
    setFilterStatus(tab);
  };

  const handleClearCompleted = (e: React.MouseEvent) => {
    e.preventDefault();
    todoList.clearCompleted();
    setTodos([...todoList.getTodo()]);
  };

  const handleUpdateTask = (idTodo: number, title: string) => {
    todoList.updateTodo(idTodo, title);
    setTodos([...todoList.getTodo()]);
  };
  

  return (
      <section className='section section-todo'>
        <div className='todo-wrapper'>
          <div className='todo'>
            <h1 className='todo-title text-center'>Todo Application</h1>
            <div className='todo-content'>
              <InputTodo handleAddTodo={handleAddTodo} />
              <Filter filterStatus={filterStatus} handleFilter={handleFilter} todos={todos} />
              <Todo
                todos={todos}
                filterStatus={filterStatus}
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
  );
};

export default Home;
