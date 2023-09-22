import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTipoAccesoComponent } from './editar-tipo-acceso.component';

describe('EditarTipoAccesoComponent', () => {
  let component: EditarTipoAccesoComponent;
  let fixture: ComponentFixture<EditarTipoAccesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarTipoAccesoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarTipoAccesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
