import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editar-sucursal',
  templateUrl: './editar-sucursal.component.html',
  styleUrls: ['./editar-sucursal.component.css']
})
export class EditarSucursalComponent implements OnInit {

  sucursales:any = {};

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.buscarSucursal();
    let temporal =localStorage.getItem("editarSucursal");
    if (temporal!=null){
      this.sucursales=JSON.parse(temporal|| '{}');
      console.log(this.sucursales);
    }
  }

  formularioSucursal(){
    let formularioValido:any = document.getElementById("loginFormSucursal");
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
    return this.http.post<any>("http://localhost:3030/sucursal/guardar", this.sucursales,httpOptions).pipe(catchError (e => "eror" ))
  }

  confirmarCreacion(res:any){
    this.sucursales = {};
    alert("Creación de Status Usuario Exitosa");
  }

  buscarSucursal(){
    this.buscarSucursalServicio().subscribe(
      (response:any) => this.sucursales = response
    )
  }

  buscarSucursalServicio():Observable<any>{
    return this.http.get<any>("http://localhost:3030/sucursal/buscar").pipe(catchError (e => "eror" ))
  }

}
