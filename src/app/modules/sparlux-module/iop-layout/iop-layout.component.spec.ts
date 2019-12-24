import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IopLayoutComponent } from './iop-layout.component';

describe('IopLayoutComponent', () => {
  let component: IopLayoutComponent;
  let fixture: ComponentFixture<IopLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IopLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IopLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
