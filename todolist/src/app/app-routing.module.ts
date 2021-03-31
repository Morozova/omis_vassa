import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { FormComponent } from './form/form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TododetailComponent } from './tododetail/tododetail.component';
import { TodolistComponent } from './todolist/todolist.component';

const routes: Routes = [
  //redirectTo: 'details'
  { path: '',  component: TodolistComponent} ,
  { path: 'details' , component: TododetailComponent, pathMatch: 'full'},
  { path: 'details/:id' , component: TododetailComponent}, 
  { path: 'form' , component: FormComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
