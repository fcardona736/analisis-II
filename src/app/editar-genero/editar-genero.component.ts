import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.css']
})
export class EditarGeneroComponent implements OnInit {

  genero:any = {};
  generos:any = {};

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.buscarGeneros();
    let temporal =localStorage.getItem("editarGenero");
    if (temporal!=null){
      this.generos=JSON.parse(temporal|| '{}');
      console.log(this.generos);
    }
  }

  formularioGenero(){
    let formularioValido:any = document.getElementById("loginFormGenero");
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
    return this.http.post<any>("http://localhost:3030/generos/guardar", this.generos,httpOptions).pipe(catchError (e => "eror" ))
  }

  confirmarCreacion(res:any){
    this.generos = {};
    alert("Creación de Empresa Exitosa");
  }

  buscarGeneros(){
    this.buscarGenerosServicio().subscribe(
      (response:any) => this.generos = response
    )
  }

  buscarGenerosServicio():Observable<any>{
    return this.http.get<any>("http://localhost:3030/generos/buscar").pipe(catchError (e => "eror" ))
  }

}
