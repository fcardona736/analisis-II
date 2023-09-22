import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editar-tipo-acceso',
  templateUrl: './editar-tipo-acceso.component.html',
  styleUrls: ['./editar-tipo-acceso.component.css']
})
export class EditarTipoAccesoComponent implements OnInit {

  tipoAccesos:any = {};

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.buscarTipoAcceso();
    let temporal =localStorage.getItem("editarTipoAcceso");
    if (temporal!=null){
      this.tipoAccesos=JSON.parse(temporal|| '{}');
      console.log(this.tipoAccesos);
    }
  }

  formularioTipoAcceso(){
    let formularioValido:any = document.getElementById("loginFormTipoAcceso");
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
    return this.http.post<any>("http://localhost:3030/tipoAcceso/guardar", this.tipoAccesos,httpOptions).pipe(catchError (e => "eror" ))
  }

  confirmarCreacion(res:any){
    this.tipoAccesos = {};
    alert("Creación de Tipo Acceso Exitosa");
  }

  buscarTipoAcceso(){
    this.buscarTipoAccesoServicio().subscribe(
      (response:any) => this.tipoAccesos = response
    )
  }

  buscarTipoAccesoServicio():Observable<any>{
    return this.http.get<any>("http://localhost:3030/sucursal/buscar").pipe(catchError (e => "eror" ))
  }

}
