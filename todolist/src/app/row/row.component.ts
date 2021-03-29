import { Component, Input, OnInit } from '@angular/core';
import { ITodos } from '../ITodos';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.sass']
})
export class RowComponent implements OnInit {

  @Input() todoTitle:string = ''
  @Input() todo:ITodos = { id:0, title: '', isCompleted:true, publish_date: '' }

  constructor() { }

  ngOnInit(): void {
  }

}
