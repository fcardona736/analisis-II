import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarStatusUsuarioComponent } from './editar-status-usuario.component';

describe('EditarStatusUsuarioComponent', () => {
  let component: EditarStatusUsuarioComponent;
  let fixture: ComponentFixture<EditarStatusUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarStatusUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarStatusUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
