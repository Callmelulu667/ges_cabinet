import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRdvComponent } from './update-rdv.component';

describe('UpdateRdvComponent', () => {
  let component: UpdateRdvComponent;
  let fixture: ComponentFixture<UpdateRdvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateRdvComponent]
    });
    fixture = TestBed.createComponent(UpdateRdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
