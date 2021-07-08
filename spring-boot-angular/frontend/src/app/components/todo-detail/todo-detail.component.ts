import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.sass']
})
export class TodoDetailComponent implements OnInit {
  todoForm = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    description: new FormControl(''),
    done: new FormControl(''),
  })
  isAdd = true

  constructor(
    private todoService: TodoService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id
    if (id) {
      this.isAdd = false
    }
    this.bindForm()
  }

  async bindForm() {
    const id = this.route.snapshot.params.id
    if (id) {
      const model = await this.todoService.getTodoDetail(id)
      this.todoForm.setValue(model)
      this.isAdd = false
    }
  }

  async onSubmit() {
    const formValue = this.todoForm.value
    let result = null
    if (formValue.id) {
      result = await this.todoService.updateTodo(formValue)
    } else {
      result = await this.todoService.addTodo(formValue)
    }
    this.router.navigate(['/todo', result.id])
    this.snackBar.open('Todo saved', undefined, {
      duration: 3000
    })
  }
}
