import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editar-opcion',
  templateUrl: './editar-opcion.component.html',
  styleUrls: ['./editar-opcion.component.css']
})
export class EditarOpcionComponent implements OnInit {

  opcion:any = {};
  opciones:any = {};

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.buscarOpcion();
    let temporal =localStorage.getItem("editarOpcion");
    if (temporal!=null){
      this.opciones=JSON.parse(temporal|| '{}');
      console.log(this.opciones);
    }
  }

  formularioOpcion(){
    let formularioValido:any = document.getElementById("loginFormOpcion");
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
    return this.http.post<any>("http://localhost:3030/opcion/guardar", this.opciones,httpOptions).pipe(catchError (e => "eror" ))
  }

  confirmarCreacion(res:any){
    this.opciones = {};
    alert("Creación de Menu Exitosa");
  }

  buscarOpcion(){
    this.buscarOpcionServicio().subscribe(
      (response:any) => this.opciones = response
    )
  }

  buscarOpcionServicio():Observable<any>{
    return this.http.get<any>("http://localhost:3030/opcion/buscar").pipe(catchError (e => "eror" ))
  }

}
