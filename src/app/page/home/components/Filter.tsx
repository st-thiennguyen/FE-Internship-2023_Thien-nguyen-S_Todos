import React, { useState } from 'react';
import TodoItemModel from '../../../models/todo-item';


interface FilterComponentProps {
  handleFilter : Function,
  todos : TodoItemModel[]
}

const Filter = (props: FilterComponentProps) => {
  const [active, setActive] = useState('All');

  const handleChangeActive = (tab: string) => {
    setActive(tab);
    if (tab === 'All') {
      props.handleFilter();
    } else if (tab === 'Completed') {
      props.handleFilter(false);
    } else {
      props.handleFilter(true);
    }
  };

  const countTodo = props.todos.filter((todo: TodoItemModel) => !todo.done).length;

  return (
    <>
      <div className='todo-filter d-flex justify-between'>
        <ul className='filter-list d-flex'>
          <li
            className={`filter-item ${active === 'All' ? 'active' : ''}`}
            onClick={() => handleChangeActive('All')}>
            All
          </li>
          <li
            className={`filter-item ${active === 'Completed' ? 'active' : ''}`}
            onClick={() => handleChangeActive('Completed')}>
            Completed
          </li>
          <li
            className={`filter-item ${active === 'Todo' ? 'active' : ''}`}
            onClick={() => handleChangeActive('Todo')}>
            Todo
          </li>
        </ul>
        <span className='todo-count'>Totals : {countTodo}</span>
      </div>
    </>
  );
};

export default Filter;
