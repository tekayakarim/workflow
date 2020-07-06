import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandePapierComponent } from './demande-papier.component';

describe('DemandePapierComponent', () => {
  let component: DemandePapierComponent;
  let fixture: ComponentFixture<DemandePapierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandePapierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandePapierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
