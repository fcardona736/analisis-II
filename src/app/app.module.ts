import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { EditarBitacoraAccesoComponent } from './editar-bitacora-acceso/editar-bitacora-acceso.component';
import { EditarEmpresaComponent } from './editar-empresa/editar-empresa.component';
import { EditarGeneroComponent } from './editar-genero/editar-genero.component';
import { EditarMenuComponent } from './editar-menu/editar-menu.component';
import { EditarModuloComponent } from './editar-modulo/editar-modulo.component';
import { EditarOpcionComponent } from './editar-opcion/editar-opcion.component';
import { EditarRoleComponent } from './editar-role/editar-role.component';
import { EditarRoleOpcionComponent } from './editar-role-opcion/editar-role-opcion.component';
import { EditarRoleOpcionIdComponent } from './editar-role-opcion-id/editar-role-opcion-id.component';
import { EditarSucursalComponent } from './editar-sucursal/editar-sucursal.component';
import { EditarStatusUsuarioComponent } from './editar-status-usuario/editar-status-usuario.component';
import { EditarTipoAccesoComponent } from './editar-tipo-acceso/editar-tipo-acceso.component';
import { EditarUsuarioPreguntaComponent } from './editar-usuario-pregunta/editar-usuario-pregunta.component';
import { EditarUsuarioRoleComponent } from './editar-usuario-role/editar-usuario-role.component';
import { EditarUsuarioRoleIdComponent } from './editar-usuario-role-id/editar-usuario-role-id.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SigninComponent,
    EditarUsuarioComponent,
    EditarBitacoraAccesoComponent,
    EditarEmpresaComponent,
    EditarGeneroComponent,
    EditarMenuComponent,
    EditarModuloComponent,
    EditarOpcionComponent,
    EditarRoleComponent,
    EditarRoleOpcionComponent,
    EditarRoleOpcionIdComponent,
    EditarSucursalComponent,
    EditarStatusUsuarioComponent,
    EditarTipoAccesoComponent,
    EditarUsuarioPreguntaComponent,
    EditarUsuarioRoleComponent,
    EditarUsuarioRoleIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
