import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-tododetail',
  templateUrl: './tododetail.component.html',
  styleUrls: ['./tododetail.component.sass']
})
export class TododetailComponent implements OnInit {

  todoId: number = 0

  constructor(public _activatedRoot: ActivatedRoute, private _router:Router) { }

  ngOnInit(): void {
    this._activatedRoot.paramMap.subscribe(urlParams => {
      this.todoId = JSON.parse(urlParams.get('id') || '{}')
    })
  }

  MyRedirectTo():void {
    this._router.navigate(['form'])
  }

}
