import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StockItemComponent } from './stock/stock-item/stock-item.component';
import { CreateStockComponent } from './stock/create-stock/create-stock.component';
import { StockListComponent } from './stock/stock-list/stock-list.component';
import { StockService } from './services/stock.service';

import { AgGridModule } from 'ag-grid-angular';
import { AgGridColumnsComponent } from './ag-grid/ag-grid-columns/ag-grid-columns.component';
import { AddPostDialogComponent } from './dialog/add-post-dialog/add-post-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './custom-material.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AgGridModule.withComponents([AgGridColumnsComponent]),
    BrowserAnimationsModule,
    CustomMaterialModule
  ],
  declarations: [
    AppComponent,
    StockItemComponent,
    CreateStockComponent,
    StockListComponent,
    AgGridColumnsComponent,
    AddPostDialogComponent,
  ],
  entryComponents: [AddPostDialogComponent],
  providers: [
    StockService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
