import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridColumnsComponent } from './ag-grid-columns.component';

describe('AgGridColumnsComponent', () => {
  let component: AgGridColumnsComponent;
  let fixture: ComponentFixture<AgGridColumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgGridColumnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
