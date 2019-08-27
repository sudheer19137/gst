import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GstrfComponent } from './gstrf.component';

describe('GstrfComponent', () => {
  let component: GstrfComponent;
  let fixture: ComponentFixture<GstrfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GstrfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GstrfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
