import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewBooksComponent } from './view-books/view-books.component';
import { BookStoreComponent } from './book-store/book-store.component';
import { SharedModule } from '../shared/shared.module';
import { MaintenanceComponent } from './maintenance/maintenance.component';



@NgModule({
  declarations: [
    ViewBooksComponent,
    BookStoreComponent,
    MaintenanceComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class BooksModule { }
