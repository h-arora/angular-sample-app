import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceProcessorComponent } from './invoice-processor.component';

describe('InvoiceProcessorComponent', () => {
  let component: InvoiceProcessorComponent;
  let fixture: ComponentFixture<InvoiceProcessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceProcessorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceProcessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
