import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanUIComponent } from './scan-ui.component';

describe('ScanUIComponent', () => {
  let component: ScanUIComponent;
  let fixture: ComponentFixture<ScanUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScanUIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
