import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editar-role-opcion-id',
  templateUrl: './editar-role-opcion-id.component.html',
  styleUrls: ['./editar-role-opcion-id.component.css']
})
export class EditarRoleOpcionIdComponent implements OnInit {

  roleOpcionsId:any = {};

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.buscarRoleOpcionId();
    let temporal =localStorage.getItem("editarRoleOpcionId");
    if (temporal!=null){
      this.roleOpcionsId=JSON.parse(temporal|| '{}');
      console.log(this.roleOpcionsId);
    }
  }

  formularioRoleOpcionId(){
    let formularioValido:any = document.getElementById("loginFormRoleOpcionId");
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
    return this.http.post<any>("http://localhost:3030/roleOpcionId/guardar", this.roleOpcionsId,httpOptions).pipe(catchError (e => "eror" ))
  }

  confirmarCreacion(res:any){
    this.roleOpcionsId = {};
    alert("Creación de Id Opcion de Roles Exitosa");
  }

  buscarRoleOpcionId(){
    this.buscarRoleOpcionIdServicio().subscribe(
      (response:any) => this.roleOpcionsId = response
    )
  }

  buscarRoleOpcionIdServicio():Observable<any>{
    return this.http.get<any>("http://localhost:3030/roleOpcionId/buscar").pipe(catchError (e => "eror" ))
  }

}
