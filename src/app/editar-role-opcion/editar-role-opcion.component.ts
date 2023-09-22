import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editar-role-opcion',
  templateUrl: './editar-role-opcion.component.html',
  styleUrls: ['./editar-role-opcion.component.css']
})
export class EditarRoleOpcionComponent implements OnInit {

  roleOpciones:any = {};

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.buscarRoleOpcion();
    let temporal =localStorage.getItem("editarRoleOpcion");
    if (temporal!=null){
      this.roleOpciones=JSON.parse(temporal|| '{}');
      console.log(this.roleOpciones);
    }
  }

  formularioRoleOpciones(){
    let formularioValido:any = document.getElementById("loginFormRoleOpciones");
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
    return this.http.post<any>("http://localhost:3030/roleOpcion/guardar", this.roleOpciones,httpOptions).pipe(catchError (e => "eror" ))
  }

  confirmarCreacion(res:any){
    this.roleOpciones = {};
    alert("Creación de Opcion de Roles Exitosa");
  }

  buscarRoleOpcion(){
    this.buscarRoleOpcionServicio().subscribe(
      (response:any) => this.roleOpciones = response
    )
  }

  buscarRoleOpcionServicio():Observable<any>{
    return this.http.get<any>("http://localhost:3030/roleOpcion/buscar").pipe(catchError (e => "eror" ))
  }

}
