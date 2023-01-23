import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  public todoList: string[] = [];


  public inputValue: string = "hello";

  public completed: boolean = false;

  public addTodo(inputValue: string) {
    this.todoList.push(inputValue);
    this.inputValue = "";

  }

  public complete() {
    this.completed = true;
  }
}
