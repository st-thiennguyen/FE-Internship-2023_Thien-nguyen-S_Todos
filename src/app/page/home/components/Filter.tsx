import { useDispatch, useSelector } from 'react-redux';
import { Tabs } from '../../../shared/constant/constant';
import { filterStatusChange } from '../../../redux/actions';
import { countTodoSelector, filterSelector } from '../../../redux/selector';

const Filter = () => {

  const dispatch = useDispatch();

  const filter = useSelector(filterSelector);

  const count = useSelector(countTodoSelector);
  
  const handleChangeActive = (tab: Tabs) => {
    dispatch(filterStatusChange(tab))
  };


  return (
    <>
      <div className='todo-filter d-flex justify-between'>
        <ul className='filter-list d-flex'>
          <li
            className={`filter-item ${filter === Tabs.ALL ? 'active' : ''}`}
            onClick={() => handleChangeActive(Tabs.ALL)}>
            All
          </li>
          <li
            className={`filter-item ${filter === Tabs.COMPLETED ? 'active' : ''}`}
            onClick={() => handleChangeActive(Tabs.COMPLETED)}>
            Completed
          </li>
          <li
            className={`filter-item ${filter === Tabs.TODO ? 'active' : ''}`}
            onClick={() => handleChangeActive(Tabs.TODO)}>
            Todo
          </li>
        </ul>
        <span className='todo-count'>Totals : {count}</span>
      </div>
    </>
  );
};

export default Filter;
