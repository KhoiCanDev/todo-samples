import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'done']
  todos!: Todo[]

  constructor(
    private todoService: TodoService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getTodoList()
  }

  async getTodoList() {
    this.todos = await this.todoService.getTodoList()
  }

  editTodo(todo: Todo) {
    this.router.navigate(['/todo', todo.id])
  }
}
