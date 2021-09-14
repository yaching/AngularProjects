import { Component, OnInit } from '@angular/core';
import 'ag-grid-enterprise';

@Component({
  selector: 'app-ag-grid-columns',
  templateUrl: './ag-grid-columns.component.html',
  styleUrls: ['./ag-grid-columns.component.css']
})
export class AgGridColumnsComponent {

  private gridApi;
  private gridColumnApi;

  public columnDefs;
  public rowData;

  constructor() {
    this.columnDefs = [
      {
        headerName: 'Col 1',
        colId: 'firstCol',
        field: 'height',
      },
      {
        headerName: 'Col 2',
        colId: 'firstCol',
        field: 'height',
      },
      {
        headerName: 'Col 3',
        field: 'height',
      },
      {
        headerName: 'Col 4',
        field: 'height',
      },
      {
        headerName: 'Col 5',
        valueGetter: 'data.width',
      },
      {
        headerName: 'Col 6',
        valueGetter: 'data.width',
      },
    ];
    this.rowData = this.createRowData();
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    var cols = params.columnApi.getAllColumns();
    cols.forEach(function (col) {
      var colDef = col.getUserProvidedColDef();
      console.log(
        colDef.headerName + ', Column ID = ' + col.getId(),
        JSON.stringify(colDef)
      );
    });
  }

  createRowData() {
    var data = [];
    for (var i = 0; i < 20; i++) {
      data.push({
        height: Math.floor(Math.random() * 100),
        width: Math.floor(Math.random() * 100),
        depth: Math.floor(Math.random() * 100),
      });
    }
    return data;
  }

}
