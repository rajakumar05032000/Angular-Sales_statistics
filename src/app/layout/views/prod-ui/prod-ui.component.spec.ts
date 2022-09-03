import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdUiComponent } from './prod-ui.component';

describe('ProdUiComponent', () => {
  let component: ProdUiComponent;
  let fixture: ComponentFixture<ProdUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
