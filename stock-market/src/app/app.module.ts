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

@NgModule({
  declarations: [
    AppComponent,
    StockItemComponent,
    CreateStockComponent,
    StockListComponent,
    AgGridColumnsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgGridModule.withComponents([AgGridColumnsComponent])
  ],
  providers: [
    StockService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
