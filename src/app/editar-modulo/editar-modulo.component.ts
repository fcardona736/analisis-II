import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editar-modulo',
  templateUrl: './editar-modulo.component.html',
  styleUrls: ['./editar-modulo.component.css']
})
export class EditarModuloComponent implements OnInit {

  modulo:any = {};
  modulos:any = {};

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.buscarModulo();
    let temporal =localStorage.getItem("editarModulo");
    if (temporal!=null){
      this.modulos=JSON.parse(temporal|| '{}');
      console.log(this.modulos);
    }
  }

  formularioModulo(){
    let formularioValido:any = document.getElementById("loginFormModulo");
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
    return this.http.post<any>("http://localhost:3030/modulo/guardar", this.modulos,httpOptions).pipe(catchError (e => "eror" ))
  }

  confirmarCreacion(res:any){
    this.modulos = {};
    alert("Creación de Menu Exitosa");
  }

  buscarModulo(){
    this.buscarModuloServicio().subscribe(
      (response:any) => this.modulos = response
    )
  }

  buscarModuloServicio():Observable<any>{
    return this.http.get<any>("http://localhost:3030/modulo/buscar").pipe(catchError (e => "eror" ))
  }

}
