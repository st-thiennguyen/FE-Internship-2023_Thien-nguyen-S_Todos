import React, { useState } from 'react';

const Filter = (props:any) => {
  console.log("Rerender filter");
  
  const [active, setActive] = useState('All');

  const handleChangeActive = (e: React.MouseEvent) => {
    const textContent = (e.target as HTMLElement).textContent ?? '';
    setActive(textContent);
    if(textContent === 'All'){
      props.handleFilter();
    }else if(textContent === 'Completed'){
      props.handleFilter(false);
    }else {
      props.handleFilter(true);
    }
  };


  return (
    <>
      <div className='todo-filter d-flex justify-between'>
        <ul className='filter-list d-flex'>
          <li
            className={`filter-item ${active === 'All' ? 'active' : ''}`}
            onClick={handleChangeActive}>
            All
          </li>
          <li
            className={`filter-item ${active === 'Completed' ? 'active' : ''}`}
            onClick={handleChangeActive}>
            Completed
          </li>
          <li
            className={`filter-item ${active === 'Todo' ? 'active' : ''}`}
            onClick={handleChangeActive}>
            Todo
          </li>
        </ul>
        <span className='todo-count'>Totals : {props.countTodo}</span>
      </div>
    </>
  );
};

export default Filter;
