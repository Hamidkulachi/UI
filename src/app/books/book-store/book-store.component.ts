import { Component } from '@angular/core';
import { Book, BooksByCategory } from '../../models/models';
import { ApiService } from '../../shared/services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'book-store',
  templateUrl: './book-store.component.html',
  styleUrl: './book-store.component.scss'
})
export class BookStoreComponent {
  displayedColumns: string[] = [
    'id',
    'title',
    'author',
    'price',
    'available',
    'order',
  ];
  books: Book[] = [];
  booksToDisplay: BooksByCategory[] = [
    {
      bookCategoryId: 1,
      category: 'C',
      subCategory: 'S',
      books: [
        {
          id: 1,
          title: 'T',
          author: 'A',
          price: 100,
          ordered: false,
          bookCategoryId: 1,
          bookCategory: { id: 1, category: '', subCategory: '' },
        },
      ],
    },
  ];

  constructor(private apiService: ApiService, private snackBar: MatSnackBar) {
    apiService.getBooks().subscribe({
      next: (res: Book[]) => {
        this.books=[];
        res.forEach((b)=> this.books.push(b));

        this.booksToDisplay=[];
        for(let book of this.books){
          let categoryExists=false;
          let categoryBook:BooksByCategory|null;
          for(let bookToDisplay of this.booksToDisplay){
            if(bookToDisplay.bookCategoryId==book.bookCategoryId){
              categoryExists=true;
              categoryBook=bookToDisplay;
            }
          } 
          if(categoryExists){
            categoryBook!.books.push(book);
          }else{
            this.booksToDisplay.push({
              bookCategoryId: book.bookCategoryId,
              category: book.bookCategory.category,
              subCategory: book.bookCategory.subCategory,
              books: [book],
            });
          }

        }
      },
    });
  }
  getBookCount() {
    let count = 0;
    this.booksToDisplay.forEach((b) => (count += b.books.length));
    return count;
  }
}