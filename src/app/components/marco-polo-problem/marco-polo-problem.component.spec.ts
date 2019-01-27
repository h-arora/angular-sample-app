import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcoPoloProblemComponent } from './marco-polo-problem.component';

describe('MarcoPoloProblemComponent', () => {
  let component: MarcoPoloProblemComponent;
  let fixture: ComponentFixture<MarcoPoloProblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcoPoloProblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcoPoloProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
