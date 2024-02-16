import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewBooksComponent } from './view-books/view-books.component';
import { BookStoreComponent } from './book-store/book-store.component';
import { SharedModule } from '../shared/shared.module';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { ReturnBookComponent } from './return-book/return-book.component';



@NgModule({
  declarations: [
    ViewBooksComponent,
    BookStoreComponent,
    MaintenanceComponent,
    ReturnBookComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class BooksModule { }
