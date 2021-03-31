import { Component, OnInit } from '@angular/core';
import { ITodos } from '../ITodos';
import { TodoserviceService } from '../todoservice.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.sass'],
})
export class TodolistComponent implements OnInit {
  todos: ITodos[] = [
    {
      id: 1,
      title: 'to do title 1',
      completed: true,
      publish_date: '2021.03.29',
    },
    {
      id: 2,
      title: 'to do title 2',
      completed: false,
      publish_date: '2021.03.29',
    },
    {
      id: 3,
      title: 'to do title 3',
      completed: true,
      publish_date: '2021.03.29',
    },
  ];

  constructor(private myTodoService:TodoserviceService) { }

  ngOnInit(): void { 
    this.myTodoService.getTodos().subscribe(result => {
      this.todos = result 
    })
   }

  insertTodo(todoTitle: string) {
    let nr = this.todos.length + 1;

    this.todos.push({
      id: nr,
      title: todoTitle,
      completed: false,
      publish_date: '2021.03.29',
    });
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(item => item.id != id)
  }
}
