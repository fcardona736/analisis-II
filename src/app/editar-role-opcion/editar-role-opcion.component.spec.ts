import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarRoleOpcionComponent } from './editar-role-opcion.component';

describe('EditarRoleOpcionComponent', () => {
  let component: EditarRoleOpcionComponent;
  let fixture: ComponentFixture<EditarRoleOpcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarRoleOpcionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarRoleOpcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
