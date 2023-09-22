import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editar-bitacora-acceso',
  templateUrl: './editar-bitacora-acceso.component.html',
  styleUrls: ['./editar-bitacora-acceso.component.css']
})
export class EditarBitacoraAccesoComponent implements OnInit {

  bitacoras:any = {};
  bitacora:any = {};

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.buscarBitacoras();
    let temporal =localStorage.getItem("editarBitacora");
    if (temporal!=null){
      this.bitacoras=JSON.parse(temporal|| '{}');
      console.log(this.bitacoras);
    }
  }

  formularioBitacora(){
    let formularioValido:any = document.getElementById("loginFormBitacora");
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
    return this.http.post<any>("http://localhost:3030/bitacora/guardar", this.bitacoras,httpOptions).pipe(catchError (e => "eror" ))
  }

  confirmarCreacion(res:any){
    this.bitacoras = {};
    alert("Creación de Bitacora Exitosa");
  }

  buscarBitacoras(){
    this.buscarBitacorasServicio().subscribe(
      (response:any) => this.bitacoras = response
    )
  }

  buscarBitacorasServicio():Observable<any>{
    return this.http.get<any>("http://localhost:3030/curso/buscar").pipe(catchError (e => "eror" ))
  }


}
