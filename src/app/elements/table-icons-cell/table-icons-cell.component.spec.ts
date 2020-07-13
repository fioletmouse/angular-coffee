import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableIconsCellComponent } from './table-icons-cell.component';

describe('TableIconsCellComponent', () => {
  let component: TableIconsCellComponent;
  let fixture: ComponentFixture<TableIconsCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableIconsCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableIconsCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
