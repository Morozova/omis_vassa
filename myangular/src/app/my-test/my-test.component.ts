import { Component, Input, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-my-test',
  templateUrl: './my-test.component.html',
  styleUrls: ['./my-test.component.scss']
})
export class MyTestComponent implements OnInit {

  firstname:string = 'Vassa'

  cars:string[] = ['audi', 'bmw', 'citroen']

  show:boolean = true

  newCarName:string = ''

  count:number = 1

  isRedSquare = true
  isGreenSquare = false

  @Input() thisChildVariable:string = 'This is from child component'

  constructor() { }

  ngOnInit(): void {
  }

  fnAddNewItem(x:number):void{
    //this.cars.push('new item ' + (this.cars.length + 1))
    this.cars.push(this.newCarName)
    this.firstname = 'Sergej ' + x.toString()
  }

  fnToggle():void{
    this.show = !this.show
  }

  fnIncrement():void{
    this.count++
  }

  fnDecrement():void{
    this.count--
  }

  fnSetStyles():any{
    return{
      square: true, 
      squareRed: this.isRedSquare, 
      squareGreen:this.isGreenSquare
    }
  }

  setSquareRed():void{
    this.isRedSquare = !this.isRedSquare
    this.isGreenSquare = false
  }

  setSquareGreen():void{
    this.isGreenSquare = !this.isGreenSquare
    this.isRedSquare = false
  }

}
