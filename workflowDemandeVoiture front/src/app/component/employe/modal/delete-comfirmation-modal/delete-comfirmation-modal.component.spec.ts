import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteComfirmationModalComponent } from './delete-comfirmation-modal.component';

describe('DeleteComfirmationModalComponent', () => {
  let component: DeleteComfirmationModalComponent;
  let fixture: ComponentFixture<DeleteComfirmationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteComfirmationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteComfirmationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
