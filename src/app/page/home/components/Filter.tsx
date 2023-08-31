import { useDispatch, useSelector } from 'react-redux';

import checkIcon from '../../../assets/images/check.svg';
import { filterCheckAll, filterStatusChange } from '../../../redux/actions';
import { countTodoSelector, filterSelector } from '../../../redux/selector';
import { Tabs } from '../../../shared/constant/constant';

const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(filterSelector);

  const count = useSelector(countTodoSelector);

  const handleChangeActive = (tab: Tabs) => {
    dispatch(filterStatusChange(tab));
  };

  const handleCheckAll = () => {
    dispatch(filterCheckAll());
  };

  return (
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
        {count <= 1 ? <span className="todo-count">Total left : {count}</span> : <span className="todo-count">Totals left : {count}</span>}
      </div>
      <div className="todo-check-all">
        <span onClick={handleCheckAll}>
          <img
            src={checkIcon}
            className="icon-check"
            alt="Check icon for check all"
          />
        </span>
      </div>
    </div>
  );
};

export default Filter;
