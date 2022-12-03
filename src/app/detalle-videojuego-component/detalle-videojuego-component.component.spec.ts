import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleVideojuegoComponentComponent } from './detalle-videojuego-component.component';

describe('DetalleVideojuegoComponentComponent', () => {
  let component: DetalleVideojuegoComponentComponent;
  let fixture: ComponentFixture<DetalleVideojuegoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleVideojuegoComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleVideojuegoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
