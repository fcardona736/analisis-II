import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editar-empresa',
  templateUrl: './editar-empresa.component.html',
  styleUrls: ['./editar-empresa.component.css']
})
export class EditarEmpresaComponent implements OnInit {

  empresa:any = {};
  empresas:any = {};

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.buscarEmpresa();
    let temporal =localStorage.getItem("editarEmpresa");
    if (temporal!=null){
      this.empresas=JSON.parse(temporal|| '{}');
      console.log(this.empresas);
    }
  }

  formularioEmpresa(){
    let formularioValido:any = document.getElementById("loginFormEmpresa");
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
    return this.http.post<any>("http://localhost:3030/empresa/guardar", this.empresas,httpOptions).pipe(catchError (e => "eror" ))
  }

  confirmarCreacion(res:any){
    this.empresas = {};
    alert("Creación de Empresa Exitosa");
  }

  buscarEmpresa(){
    this.buscarEmpresasServicio().subscribe(
      (response:any) => this.empresas = response
    )
  }

  buscarEmpresasServicio():Observable<any>{
    return this.http.get<any>("http://localhost:3030/empresas/buscar").pipe(catchError (e => "eror" ))
  }

}
