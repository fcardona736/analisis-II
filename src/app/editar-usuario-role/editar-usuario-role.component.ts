import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editar-usuario-role',
  templateUrl: './editar-usuario-role.component.html',
  styleUrls: ['./editar-usuario-role.component.css']
})
export class EditarUsuarioRoleComponent implements OnInit {

  usuarioRoles:any = {};

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.buscarUsuarioRole();
    let temporal =localStorage.getItem("editarUsuarioRole");
    if (temporal!=null){
      this.usuarioRoles=JSON.parse(temporal|| '{}');
      console.log(this.usuarioRoles);
    }
  }

  formularioUsuarioRole(){
    let formularioValido:any = document.getElementById("loginFormUsuarioRole");
    if(formularioValido.reportValidity()){
      this.servicioCrear().subscribe(
        (respuesta:any) => this.confirmarCreacion(respuesta)
      )
    }
  }

  servicioCrear(){
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    return this.http.post<any>("http://localhost:3030/usuarioRole/guardar", this.usuarioRoles,httpOptions).pipe(catchError (e => "eror" ))
  }

  confirmarCreacion(res:any){
    this.usuarioRoles = {};
    alert("Creación de Tipo Acceso Exitosa");
  }

  buscarUsuarioRole(){
    this.buscarUsuarioRoleService().subscribe(
      (response:any) => this.usuarioRoles = response
    )
  }

  buscarUsuarioRoleService():Observable<any>{
    return this.http.get<any>("http://localhost:3030/usuarioRole/buscar").pipe(catchError (e => "eror" ))
  }


}
