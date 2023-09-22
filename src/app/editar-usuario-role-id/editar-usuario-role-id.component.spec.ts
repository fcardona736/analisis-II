import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarUsuarioRoleIdComponent } from './editar-usuario-role-id.component';

describe('EditarUsuarioRoleIdComponent', () => {
  let component: EditarUsuarioRoleIdComponent;
  let fixture: ComponentFixture<EditarUsuarioRoleIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarUsuarioRoleIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarUsuarioRoleIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
