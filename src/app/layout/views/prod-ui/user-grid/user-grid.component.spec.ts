import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGridComponent } from './user-grid.component';

describe('UserGridComponent', () => {
  let component: UserGridComponent;
  let fixture: ComponentFixture<UserGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserGridComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
