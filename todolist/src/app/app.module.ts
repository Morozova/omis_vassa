import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { FormComponent } from './form/form.component';
import { RowComponent } from './row/row.component';
import { TododetailComponent } from './tododetail/tododetail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component'
import { HttpClientModule } from '@angular/common/http'
 
@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    FormComponent,
    RowComponent,
    TododetailComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
