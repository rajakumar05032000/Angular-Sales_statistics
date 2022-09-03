import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeScanComponent } from './code-scan.component';

describe('CodeScanComponent', () => {
  let component: CodeScanComponent;
  let fixture: ComponentFixture<CodeScanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeScanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
