import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-editar-usuario-pregunta',
  templateUrl: './editar-usuario-pregunta.component.html',
  styleUrls: ['./editar-usuario-pregunta.component.css']
})
export class EditarUsuarioPreguntaComponent implements OnInit {

  usuarioPreguntas:any = {};

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.buscarUsuarioPregunta();
    let temporal =localStorage.getItem("editarUsuarioPreguntas");
    if (temporal!=null){
      this.usuarioPreguntas=JSON.parse(temporal|| '{}');
      console.log(this.usuarioPreguntas);
    }
  }

  formularioUsuarioPregunta(){
    let formularioValido:any = document.getElementById("loginFormUsuarioPregunta");
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
    return this.http.post<any>("http://localhost:3030/usuarioPregunta/guardar", this.usuarioPreguntas,httpOptions).pipe(catchError (e => "eror" ))
  }

  confirmarCreacion(res:any){
    this.usuarioPreguntas = {};
    alert("Creación de Tipo Acceso Exitosa");
  }

  buscarUsuarioPregunta(){
    this.buscarUsuarioPreguntaService().subscribe(
      (response:any) => this.usuarioPreguntas = response
    )
  }

  buscarUsuarioPreguntaService():Observable<any>{
    return this.http.get<any>("http://localhost:3030/usuarioPregunta/buscar").pipe(catchError (e => "eror" ))
  }


}
