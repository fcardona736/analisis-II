import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarOpcionComponent } from './editar-opcion.component';

describe('EditarOpcionComponent', () => {
  let component: EditarOpcionComponent;
  let fixture: ComponentFixture<EditarOpcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarOpcionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarOpcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
