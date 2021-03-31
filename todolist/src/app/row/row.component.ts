import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ITodos } from '../ITodos';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.sass']
})
export class RowComponent implements OnInit {

  @Input() todoTitle: string = ''
  @Input() todo: ITodos = { id: 0, title: '', completed: true, publish_date: '' }
  @Output() onDeleteTodoItem: EventEmitter<number> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  setIsCompleted(): any {
    this.todo.completed = !this.todo.completed
  }

  generateClasses(): any {
    return {
      completed: this.todo.completed
    }
  }

  onDeleteItem(id: number): void {
    this.onDeleteTodoItem.emit(id)
  }
}
