import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  usuario:any = {};
  usuarios:any = {};

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.buscarUsuarios();
    let temporal =localStorage.getItem("editarUsuario");
    if (temporal!=null){
      this.usuarios=JSON.parse(temporal|| '{}');
      console.log(this.usuarios);
    }
  }

  formularioUsuario(){
    let formularioValido:any = document.getElementById("loginFormUsuario");
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
    return this.http.post<any>("http://localhost:3030/curso/guardar", this.usuarios,httpOptions).pipe(catchError (e => "eror" ))
  }

  confirmarCreacion(res:any){
    this.usuarios = {};
    alert("Creación de Usuario Exitosa");
  }

  buscarUsuarios(){
    this.buscarUsuariosServicio().subscribe(
      (response:any) => this.usuarios = response
    )
  }

  buscarUsuariosServicio():Observable<any>{
    return this.http.get<any>("http://localhost:3030/curso/buscar").pipe(catchError (e => "eror" ))
  }

}
