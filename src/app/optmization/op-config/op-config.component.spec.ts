import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpConfigComponent } from './op-config.component';

describe('OpConfigComponent', () => {
  let component: OpConfigComponent;
  let fixture: ComponentFixture<OpConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
