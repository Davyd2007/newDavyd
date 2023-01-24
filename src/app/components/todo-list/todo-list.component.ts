import { Component } from '@angular/core';

interface TodoList {
  name: string;
  completed: boolean;
  delete: object;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  public todoList: TodoList[] = [];

  public inputValue: string = "hello";


  public addTodo(inputValue: string) {
    if (!inputValue) {
      return;
    }
    this.todoList.push({
      name: inputValue,
      completed: false
    });
    this.inputValue = "";

  }

  public complete(todo: TodoList) {
    console.log(todo);
    todo.completed = true;
    // this.completed = true;
  }

  public resume(todo: TodoList) {
    todo.completed = false;
  }

  public delete(todo: TodoList)  {

  }

}
