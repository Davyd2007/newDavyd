import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { XyzComponent } from './components/xyz/xyz.component';
import { UiButtonComponent } from "./components/ui-button/ui-button.component";
import { TestPipe } from './components/test.pipe';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    UiButtonComponent,
    TestPipe,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
