import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editar-menu',
  templateUrl: './editar-menu.component.html',
  styleUrls: ['./editar-menu.component.css']
})
export class EditarMenuComponent implements OnInit {

  menu:any = {};
  menus:any = {};

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.buscarMenu();
    let temporal =localStorage.getItem("editarMenu");
    if (temporal!=null){
      this.menus=JSON.parse(temporal|| '{}');
      console.log(this.menus);
    }
  }

  formularioMenu(){
    let formularioValido:any = document.getElementById("loginFormMenu");
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
    return this.http.post<any>("http://localhost:3030/menu/guardar", this.menus,httpOptions).pipe(catchError (e => "eror" ))
  }

  confirmarCreacion(res:any){
    this.menus = {};
    alert("Creación de Menu Exitosa");
  }

  buscarMenu(){
    this.buscarMenuServicio().subscribe(
      (response:any) => this.menus = response
    )
  }

  buscarMenuServicio():Observable<any>{
    return this.http.get<any>("http://localhost:3030/menu/buscar").pipe(catchError (e => "eror" ))
  }

}
