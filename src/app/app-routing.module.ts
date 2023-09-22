import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { EditarBitacoraAccesoComponent } from './editar-bitacora-acceso/editar-bitacora-acceso.component';
import { EditarEmpresaComponent } from './editar-empresa/editar-empresa.component';
import { EditarMenuComponent } from './editar-menu/editar-menu.component';
import { EditarModuloComponent } from './editar-modulo/editar-modulo.component';
import { EditarOpcionComponent } from './editar-opcion/editar-opcion.component';
import { EditarRoleComponent } from './editar-role/editar-role.component';
import { EditarRoleOpcionComponent } from './editar-role-opcion/editar-role-opcion.component';
import { EditarRoleOpcionIdComponent } from './editar-role-opcion-id/editar-role-opcion-id.component';
import { EditarStatusUsuarioComponent } from './editar-status-usuario/editar-status-usuario.component';
import { EditarTipoAccesoComponent } from './editar-tipo-acceso/editar-tipo-acceso.component';
import { EditarUsuarioPreguntaComponent } from './editar-usuario-pregunta/editar-usuario-pregunta.component';
import { EditarUsuarioRoleComponent } from './editar-usuario-role/editar-usuario-role.component';
import { EditarUsuarioRoleIdComponent } from './editar-usuario-role-id/editar-usuario-role-id.component';

const routes: Routes = [
  {path:'inicio',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'signin',component:SigninComponent},
  {path:'editar-usuario',component:EditarUsuarioComponent},
  {path:'',component:EditarBitacoraAccesoComponent},
  {path:'',component:EditarEmpresaComponent},
  {path:'',component:EditarMenuComponent},
  {path:'',component:EditarModuloComponent},
  {path:'',component:EditarOpcionComponent},
  {path:'',component:EditarRoleComponent},
  {path:'',component:EditarRoleOpcionComponent},
  {path:'',component:EditarRoleOpcionIdComponent},
  {path:'',component:EditarStatusUsuarioComponent},
  {path:'',component:EditarTipoAccesoComponent},
  {path:'',component:EditarUsuarioPreguntaComponent},
  {path:'',component:EditarUsuarioRoleComponent},
  {path:'',component:EditarUsuarioRoleIdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
