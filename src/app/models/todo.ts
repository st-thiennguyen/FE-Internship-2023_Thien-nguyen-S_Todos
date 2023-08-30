import { StorageKey, Tabs } from '../shared/constant/constant';
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

class TodoModel implements TodoProps {
  items: TodoItemModel[];
  constructor(item?: TodoItemModel[]) {
    this.items = item || this.getTodoFromDatabase();
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
    localStorage.setItem(StorageKey.TODO, JSON.stringify(this.items));
  }

  getTodoFromDatabase(): TodoItemModel[] {
    const todo = JSON.parse(localStorage.getItem(StorageKey.TODO)!) || [];
    return todo;
  }

  getTodo(): TodoItemModel[] {
    return this.items;
  }

  filter(value?: String): TodoItemModel[] {
    let newArr = this.items;    
    if (value === Tabs.ALL) {
      return this.items;
    } if( value === Tabs.COMPLETED){
      return newArr.filter((item) => item.done !== false);
    }else {
      return newArr.filter((item) => item.done !== true);
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
