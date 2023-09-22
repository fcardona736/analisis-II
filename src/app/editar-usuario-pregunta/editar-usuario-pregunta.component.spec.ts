import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarUsuarioPreguntaComponent } from './editar-usuario-pregunta.component';

describe('EditarUsuarioPreguntaComponent', () => {
  let component: EditarUsuarioPreguntaComponent;
  let fixture: ComponentFixture<EditarUsuarioPreguntaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarUsuarioPreguntaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarUsuarioPreguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
