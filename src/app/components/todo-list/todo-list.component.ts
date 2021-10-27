import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[]=[];
  todosSearchResult: Todo[]=[];
  todosTemp: Todo[]=[];

  searchText: string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First Todo',
        completed: false
      },
      {
        content: 'Second Todo',
        completed: false
      }
    ]
  }

  toggleDone(id: number){
    this.todos.map((v,i) => {
      if(i==id){
        if(v.completed){
          v.completed = !v.completed;
        }
        else{
          v.completed = true;
        }
      } 
      // console.log(v);
      return v;
    })
  }

  deleteTodo(id: number){
    this.todos = this.todos.filter((v,i) => i != id);
    alert(`ID ${id + 1} Deleted`);
  }

  addTodo(todo: Todo){
    this.todos.push(todo);
    alert(`${todo.content} Added To List`);
  }

  editTodo(id: number){
    this.todos.map((v,i) => {
      if(i==id){
        console.log(v.content);
        console.log(i);
        // this.todos[i].content = this.todos[i].content + " Edited";
      }
      return v;
    })
  }

  searchTodoo(search: string){
    this.todosSearchResult = this.todos.filter(v => v.content.toLowerCase().includes(search.toLowerCase()));
    // this.todos = this.todosSearchResult;
    
    return this.todosSearchResult;

  }


}
