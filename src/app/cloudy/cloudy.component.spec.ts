import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudyComponent } from './cloudy.component';

describe('CloudyComponent', () => {
  let component: CloudyComponent;
  let fixture: ComponentFixture<CloudyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CloudyComponent]
    });
    fixture = TestBed.createComponent(CloudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
