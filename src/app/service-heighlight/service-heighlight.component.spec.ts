import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceHeighlightComponent } from './service-heighlight.component';

describe('ServiceHeighlightComponent', () => {
  let component: ServiceHeighlightComponent;
  let fixture: ComponentFixture<ServiceHeighlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceHeighlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceHeighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
