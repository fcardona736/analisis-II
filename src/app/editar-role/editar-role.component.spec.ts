import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarRoleComponent } from './editar-role.component';

describe('EditarRoleComponent', () => {
  let component: EditarRoleComponent;
  let fixture: ComponentFixture<EditarRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarRoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
