import { useDispatch, useSelector } from 'react-redux';

import checkIcon from '../../../assets/images/check.svg';
import { filterCheckAll, filterStatusChange } from '../../../redux/actions';
import { Tabs } from '../../../shared/constant/constant';
import TodoItemModel from '../../../models/todo-item';

const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector((state:any) => state.filters.status);

  const count = useSelector((state:any) => state.todos.items.filter((todo: TodoItemModel) => !todo.done).length);

  const handleChangeActive = (tab: Tabs) => {
    dispatch(filterStatusChange(tab));
  };

  const handleCheckAll = () => {
    dispatch(filterCheckAll());
  };

  return (
    <div className="todo-filter-wrapper">
      <div className="todo-filter d-flex justify-between">
      <span onClick={handleCheckAll}>
          <img
            src={checkIcon}
            className="icon-check"
            alt="Check icon for check all"
          />
        </span>
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
        <span className="todo-count">Left : {count}</span>
      </div>

    </div>
  );
};

export default Filter;
