import TodoItemModel from '../../../models/todo-item';
import { Tabs } from '../../../shared/constant/constant';


interface FilterComponentProps {
  handleFilter : Function,
  filterStatus : String,
  todos : TodoItemModel[]
}

const Filter = (props: FilterComponentProps) => {
  const handleChangeActive = (tab: Tabs) => {
    props.handleFilter(tab);
  };

  const countTodo = props.todos.filter((todo: TodoItemModel) => !todo.done).length;

  return (
    <>
      <div className='todo-filter d-flex justify-between'>
        <ul className='filter-list d-flex'>
          <li
            className={`filter-item ${props.filterStatus === Tabs.ALL ? 'active' : ''}`}
            onClick={() => handleChangeActive(Tabs.ALL)}>
            All
          </li>
          <li
            className={`filter-item ${props.filterStatus === Tabs.COMPLETED ? 'active' : ''}`}
            onClick={() => handleChangeActive(Tabs.COMPLETED)}>
            Completed
          </li>
          <li
            className={`filter-item ${props.filterStatus === Tabs.TODO ? 'active' : ''}`}
            onClick={() => handleChangeActive(Tabs.TODO)}>
            Todo
          </li>
        </ul>
        <span className='todo-count'>Totals : {countTodo}</span>
      </div>
    </>
  );
};

export default Filter;
