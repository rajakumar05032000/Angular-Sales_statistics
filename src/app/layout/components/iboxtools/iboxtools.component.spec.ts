import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IboxtoolsComponent } from './iboxtools.component';

describe('IboxtoolsComponent', () => {
  let component: IboxtoolsComponent;
  let fixture: ComponentFixture<IboxtoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IboxtoolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IboxtoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
