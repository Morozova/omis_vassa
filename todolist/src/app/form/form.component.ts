import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass'],
})
export class FormComponent implements OnInit {
  inputTodoTitle: string = '';
  inputTodoIsCompleted: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  @Output() onInsertTodoItem: EventEmitter<any> = new EventEmitter();

  frmInsertTodoItem() {
    this.onInsertTodoItem.emit(this.inputTodoTitle);
  }
}
