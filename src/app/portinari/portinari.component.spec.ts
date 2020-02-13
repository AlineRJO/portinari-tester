import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortinariComponent } from './portinari.component';

describe('PortinariComponent', () => {
  let component: PortinariComponent;
  let fixture: ComponentFixture<PortinariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortinariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortinariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
