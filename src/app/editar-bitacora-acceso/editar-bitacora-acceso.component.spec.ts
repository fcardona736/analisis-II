import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarBitacoraAccesoComponent } from './editar-bitacora-acceso.component';

describe('EditarBitacoraAccesoComponent', () => {
  let component: EditarBitacoraAccesoComponent;
  let fixture: ComponentFixture<EditarBitacoraAccesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarBitacoraAccesoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarBitacoraAccesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
