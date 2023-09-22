import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editar-status-usuario',
  templateUrl: './editar-status-usuario.component.html',
  styleUrls: ['./editar-status-usuario.component.css']
})
export class EditarStatusUsuarioComponent implements OnInit {

  statusUsuario:any = {};

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.buscarStatusUsuario();
    let temporal =localStorage.getItem("editarUsuario");
    if (temporal!=null){
      this.statusUsuario=JSON.parse(temporal|| '{}');
      console.log(this.statusUsuario);
    }
  }

  formularioStatusUsuario(){
    let formularioValido:any = document.getElementById("loginFormStatusUsuario");
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
    return this.http.post<any>("http://localhost:3030/Status/guardar", this.statusUsuario,httpOptions).pipe(catchError (e => "eror" ))
  }

  confirmarCreacion(res:any){
    this.statusUsuario = {};
    alert("Creación de Status Usuario Exitosa");
  }

  buscarStatusUsuario(){
    this.buscarStatusUsuariosServicio().subscribe(
      (response:any) => this.statusUsuario = response
    )
  }

  buscarStatusUsuariosServicio():Observable<any>{
    return this.http.get<any>("http://localhost:3030/Status/buscar").pipe(catchError (e => "eror" ))
  }

}
