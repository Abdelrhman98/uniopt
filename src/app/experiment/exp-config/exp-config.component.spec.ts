import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpConfigComponent } from './exp-config.component';

describe('ExpConfigComponent', () => {
  let component: ExpConfigComponent;
  let fixture: ComponentFixture<ExpConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
