import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  readonly host = 'http://localhost:8080'
  readonly endpoint = 'todos'

  constructor(private http: HttpClient) { }

  getTodoList() {
    return this.http.get<Todo[]>(`${this.host}/${this.endpoint}`).toPromise()
  }

  getTodoDetail(id: number) {
    return this.http.get<Todo>(`${this.host}/${this.endpoint}/${id}`).toPromise()
  }

  addTodo(todo: Todo) {
    return this.http.post<Todo>(`${this.host}/${this.endpoint}`, todo).toPromise()
  }

  updateTodo(todo: Todo) {
    return this.http.put<Todo>(`${this.host}/${this.endpoint}`, todo).toPromise()
  }
}
