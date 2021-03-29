import { Component, OnInit } from '@angular/core';
import { ITodos } from '../ITodos';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.sass']
})
export class TodolistComponent implements OnInit {

  todos:ITodos[] = [
    {
      id:1,
      title:'to do title 1',
      isCompleted:true,
      publish_date:'2021.03.29'
},
{
  id:2,
  title:'to do title 2',
  isCompleted:false,
  publish_date:'2021.03.29'
},
{
  id:3,
  title:'to do title 3',
  isCompleted:true,
  publish_date:'2021.03.29'
}
]

  constructor() { }

  ngOnInit(): void {
  }

  insertTodo(todoTitle:string){
    let nr = this.todos.length + 1

    this.todos.push(
      {
      id: nr,
      title:todoTitle,
      isCompleted:true,
      publish_date:'2021.03.29'
    }
    )
  }

}
