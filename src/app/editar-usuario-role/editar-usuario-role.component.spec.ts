import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarUsuarioRoleComponent } from './editar-usuario-role.component';

describe('EditarUsuarioRoleComponent', () => {
  let component: EditarUsuarioRoleComponent;
  let fixture: ComponentFixture<EditarUsuarioRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarUsuarioRoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarUsuarioRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
