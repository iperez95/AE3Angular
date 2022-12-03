import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVideojuegosComponentComponent } from './lista-videojuegos-component.component';

describe('ListaVideojuegosComponentComponent', () => {
  let component: ListaVideojuegosComponentComponent;
  let fixture: ComponentFixture<ListaVideojuegosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaVideojuegosComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaVideojuegosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
