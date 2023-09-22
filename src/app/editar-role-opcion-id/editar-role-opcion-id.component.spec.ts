import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarRoleOpcionIdComponent } from './editar-role-opcion-id.component';

describe('EditarRoleOpcionIdComponent', () => {
  let component: EditarRoleOpcionIdComponent;
  let fixture: ComponentFixture<EditarRoleOpcionIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarRoleOpcionIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarRoleOpcionIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
