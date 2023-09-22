import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editar-role',
  templateUrl: './editar-role.component.html',
  styleUrls: ['./editar-role.component.css']
})
export class EditarRoleComponent implements OnInit {

  role:any = {};
  roles:any = {};

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.buscarRole();
    let temporal =localStorage.getItem("editarRole");
    if (temporal!=null){
      this.roles=JSON.parse(temporal|| '{}');
      console.log(this.roles);
    }
  }

  formularioRole(){
    let formularioValido:any = document.getElementById("loginFormRole");
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
    return this.http.post<any>("http://localhost:3030/role/guardar", this.roles,httpOptions).pipe(catchError (e => "eror" ))
  }

  confirmarCreacion(res:any){
    this.roles = {};
    alert("Creación de Role Exitosa");
  }

  buscarRole(){
    this.buscarRoleServicio().subscribe(
      (response:any) => this.roles = response
    )
  }

  buscarRoleServicio():Observable<any>{
    return this.http.get<any>("http://localhost:3030/role/buscar").pipe(catchError (e => "eror" ))
  }

}
