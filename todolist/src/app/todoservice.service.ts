import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITodos } from './ITodos';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {

  url: string = 'https://jsonplaceholder.typicode.com/todos'
  params = {
    _limit: 5
  }

  constructor(private httpClient: HttpClient) { }

  getUrl():string{
    let strParams:string = ''
    Object.entries(this.params).forEach(elem => {
      strParams += elem[0] + '=' + elem[1] + '&'
    })
    return this.url + '?' + strParams.substr(0, strParams.length - 1)
  }

  getTodos(): Observable<ITodos[]> {
    let result = this.httpClient.get<ITodos[]>(this.getUrl())
    return result
  }
}
