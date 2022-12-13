import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDataTableComponent } from './show-data-table.component';

describe('ShowDataTableComponent', () => {
  let component: ShowDataTableComponent;
  let fixture: ComponentFixture<ShowDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDataTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
