import { useDispatch, useSelector } from 'react-redux';

import { filterCheckAll, filterStatusChange } from '../../../redux/actions';
import { countTodoSelector, filterSelector } from '../../../redux/selector';
import { Tabs } from '../../../shared/constant/constant';
import { useState } from 'react';

const Filter = () => {
  const dispatch = useDispatch();

  const [checkAll, setCheckAll] = useState(false);

  const filter = useSelector(filterSelector);

  const count = useSelector(countTodoSelector);

  const handleChangeActive = (tab: Tabs) => {
    dispatch(filterStatusChange(tab));
  };

  const handleCheckAll = () => {
    setCheckAll(!checkAll);
    dispatch(filterCheckAll(checkAll))
  }

  return (
    <>
      <div className="todo-filter-wrapper">
        <div className="todo-filter d-flex justify-between">
          <ul className="filter-list d-flex">
            <li
              className={`filter-item ${filter === Tabs.ALL ? 'active' : ''}`}
              onClick={() => handleChangeActive(Tabs.ALL)}
            >
              All
            </li>
            <li
              className={`filter-item ${
                filter === Tabs.COMPLETED ? 'active' : ''
              }`}
              onClick={() => handleChangeActive(Tabs.COMPLETED)}
            >
              Completed
            </li>
            <li
              className={`filter-item ${filter === Tabs.TODO ? 'active' : ''}`}
              onClick={() => handleChangeActive(Tabs.TODO)}
            >
              Todo
            </li>
          </ul>
          <span className="todo-count">Totals : {count}</span>
        </div>
        <div className="todo-check-all">
          <span onClick={handleCheckAll} className={`${checkAll ? 'active' : ''}`}>Completed All</span>
        </div>
      </div>
    </>
  );
};

export default Filter;
