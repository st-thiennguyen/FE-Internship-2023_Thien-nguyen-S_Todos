import TodoItemModel from './todo-item';

interface TodoProps {
  items: TodoItemModel[];
  addTodo(todo: TodoItemModel): void;
  updateTodo(idTodo: number, title: string): void;
  completedTodo(idTodo: number): void;
  deleteTodo(idTodo: number): void;
  saveTodo(): void;
  getTodo(): void;
  countTodo(): number;
}

export default TodoProps;
