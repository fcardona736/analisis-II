import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editar-usuario-role-id',
  templateUrl: './editar-usuario-role-id.component.html',
  styleUrls: ['./editar-usuario-role-id.component.css']
})
export class EditarUsuarioRoleIdComponent implements OnInit {

  usuarioRoleId:any = {};

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.buscarUsuarioRoleId();
    let temporal =localStorage.getItem("editarUsuarioRoleId");
    if (temporal!=null){
      this.usuarioRoleId=JSON.parse(temporal|| '{}');
      console.log(this.usuarioRoleId);
    }
  }

  formularioUsuarioRoleId(){
    let formularioValido:any = document.getElementById("loginFormUsuarioRoleId");
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
    return this.http.post<any>("http://localhost:3030/usuarioRole/guardar", this.usuarioRoleId,httpOptions).pipe(catchError (e => "eror" ))
  }

  confirmarCreacion(res:any){
    this.usuarioRoleId = {};
    alert("Creación de Usuario Role Id");
  }

  buscarUsuarioRoleId(){
    this.buscarUsuarioRoleIdService().subscribe(
      (response:any) => this.usuarioRoleId = response
    )
  }

  buscarUsuarioRoleIdService():Observable<any>{
    return this.http.get<any>("http://localhost:3030/usuarioRole/buscar").pipe(catchError (e => "eror" ))
  }

}
