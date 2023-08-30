import InputTodo from './components/InputTodo';
import Filter from './components/Filter';
import Todo from './components/Todo';
import { useDispatch } from 'react-redux';
import { clearCompleted } from '../../redux/actions';

const Home = () => {

  const dispatch = useDispatch();

  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };

  return (
      <section className='section section-todo'>
        <div className='todo-wrapper'>
          <div className='todo'>
            <h1 className='todo-title text-center'>Todo Application</h1>
            <div className='todo-content'>
              <InputTodo />
              <Filter />
              <Todo/>
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
