import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaTransferenciaComponent } from './nova-transferencia.component';

describe('HomeComponent', () => {
  let component: NovaTransferenciaComponent;
  let fixture: ComponentFixture<NovaTransferenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaTransferenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovaTransferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
