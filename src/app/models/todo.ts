import { STORAGE_KEY } from '../shared/constant/constant';
import TodoItemModel from './todo-item';
import TodoProps from './todo.props';

class TodoModel implements TodoProps {
  items: TodoItemModel[];
  constructor(item: TodoItemModel[]) {
    this.items = item;
    this.getTodo();
  }

  addTodo(todo: TodoItemModel): void {
    this.items = [todo, ...this.items];
    this.saveTodo();
  }

  updateTodo(idTodo: number, title: string): void {
    let todoItem = this.items.find((item) => item.id === idTodo);
    if (todoItem !== null) {
      todoItem!.title = title ?? null;
    }
    this.saveTodo();
  }

  completedTodo(idTodo: number): void {
    let todoItem = this.items.find((item) => item.id === idTodo);
    if (todoItem !== null) {
      todoItem!.done = !todoItem?.done;
    }
    this.saveTodo();
  }

  deleteTodo(idTodo: number): void {
    this.items = this.items.filter((item) => item.id !== idTodo);
    this.saveTodo();
  }

  saveTodo(): void {
    localStorage.setItem(STORAGE_KEY.TODO, JSON.stringify(this.items));
  }

  getTodo(): void {
    const todo = JSON.parse(localStorage.getItem(STORAGE_KEY.TODO)!) || [];
    this.items = todo;
  }

  filter(value?: boolean): TodoItemModel[] {
    if (value === null) {
      return this.items;
    } else {
      return this.items.filter((item) => item.done !== value);
    }
  }

  clearCompleted(): void {
    this.items = this.items.filter((item) => item.done !== true);
    this.saveTodo();
  }

  countTodo(): number {
    return this.items.filter((todo) => !todo.done).length;
  }
}

export default TodoModel;
