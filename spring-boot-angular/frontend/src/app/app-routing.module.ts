import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

const routes: Routes = [
  { path: 'todo', component: TodoListComponent },
  { path: 'todo/add', component: TodoDetailComponent },
  { path: 'todo/:id', component: TodoDetailComponent },
  { path: '', redirectTo: '/todo', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
