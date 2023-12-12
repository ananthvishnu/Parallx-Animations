import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackerFormComponent } from './hacker-form.component';

describe('HackerFormComponent', () => {
  let component: HackerFormComponent;
  let fixture: ComponentFixture<HackerFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HackerFormComponent]
    });
    fixture = TestBed.createComponent(HackerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
