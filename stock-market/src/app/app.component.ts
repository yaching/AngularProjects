import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'; 
import { AddPostDialogComponent } from './dialog/add-post-dialog/add-post-dialog.component'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'stock-market';

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  showAddPostDialog() {
    this.dialog.open(AddPostDialogComponent);
  }
}
