import { useDispatch, useSelector } from 'react-redux';

import checkIcon from '../../../assets/images/check.svg';
import TodoItemModel from '../../../models/todo-item';
import { todoCompletedAll, filterStatusChange } from '../../../redux/actions';
import { Tabs } from '../../../shared/constant/constant';

const Filter = () => {
  const dispatch = useDispatch();

  const filterTabCurrent = useSelector((state: any) => state.filters.status);

  const countItemsLeft = useSelector(
    (state: any) =>
      state.todos.items.filter((todo: TodoItemModel) => !todo.isCompleted)
        .length,
  );

  const handleChangeActive = (tab: Tabs) => {
    dispatch(filterStatusChange(tab));
  };

  const handleCompletedAll = () => {
    dispatch(todoCompletedAll());
  };

  const tabs = [Tabs.ALL, Tabs.COMPLETED, Tabs.TODO];

  return (
    <div className="todo-filter-wrapper">
      <div className="todo-filter d-flex justify-between">
        <span onClick={handleCompletedAll}>
          <img
            src={checkIcon}
            className="icon-check"
            alt="Check icon for check all"
          />
        </span>
        <ul className="filter-list d-flex">
          {tabs &&
            tabs.map((t, ind) => (
              <li key={ind} className={`filter-item ${filterTabCurrent === tabs[ind] ? 'active' : ''}`}
                onClick={() => handleChangeActive(tabs[ind])}>
                {tabs[ind]}
              </li>
            ))}
        </ul>
        <span className="todo-count">Left : {countItemsLeft}</span>
      </div>
    </div>
  );
};

export default Filter;
