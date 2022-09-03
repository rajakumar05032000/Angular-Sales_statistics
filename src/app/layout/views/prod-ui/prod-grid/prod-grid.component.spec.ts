import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdGridComponent } from './prod-grid.component';

describe('ProdGridComponent', () => {
  let component: ProdGridComponent;
  let fixture: ComponentFixture<ProdGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
