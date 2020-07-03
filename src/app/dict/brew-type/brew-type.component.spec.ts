import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrewTypeComponent } from './brew-type.component';

describe('BrewTypeComponent', () => {
  let component: BrewTypeComponent;
  let fixture: ComponentFixture<BrewTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrewTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrewTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
