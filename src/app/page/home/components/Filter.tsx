import React, { useState } from 'react';
import TodoItemModel from '../../../models/todo-item';
import { TAB_FILTER } from '../../../shared/constant/constant';


interface FilterComponentProps {
  handleFilter : Function,
  todos : TodoItemModel[]
}

const Filter = (props: FilterComponentProps) => {
  const [active, setActive] = useState(TAB_FILTER.ALL);

  const handleChangeActive = (tab: TAB_FILTER) => {
    setActive(tab);
    if (tab === TAB_FILTER.ALL) {
      props.handleFilter();
    } else if (tab === TAB_FILTER.COMPLETED) {
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
            className={`filter-item ${active === TAB_FILTER.ALL ? 'active' : ''}`}
            onClick={() => handleChangeActive(TAB_FILTER.ALL)}>
            All
          </li>
          <li
            className={`filter-item ${active === TAB_FILTER.COMPLETED ? 'active' : ''}`}
            onClick={() => handleChangeActive(TAB_FILTER.COMPLETED)}>
            Completed
          </li>
          <li
            className={`filter-item ${active === TAB_FILTER.TODO ? 'active' : ''}`}
            onClick={() => handleChangeActive(TAB_FILTER.TODO)}>
            Todo
          </li>
        </ul>
        <span className='todo-count'>Totals : {countTodo}</span>
      </div>
    </>
  );
};

export default Filter;
