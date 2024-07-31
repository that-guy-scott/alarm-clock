import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmFormComponent } from './alarm-form.component';

describe('AlarmFormComponent', () => {
  let component: AlarmFormComponent;
  let fixture: ComponentFixture<AlarmFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlarmFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlarmFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
