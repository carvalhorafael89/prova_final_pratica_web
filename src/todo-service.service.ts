import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TodoInterface } from './Todo-interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor(private http: HttpClient) { }

  private endpoint = 'https://jsonplaceholder.typicode.com/todos';

  getTodo(): Observable<TodoInterface[]> {
    return this.http.get<TodoInterface[]>(this.endpoint);
  }

}
