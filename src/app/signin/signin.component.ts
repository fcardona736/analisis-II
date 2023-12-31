import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  usuario:any = {};
  loading:boolean = false;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  recuperar(){
    let formulario:any = document.getElementById("recuperar");
    let formularioValido:boolean = formulario.reportValidity();
    if(formularioValido){
      this.loading = true;
      this.createService().subscribe(
        data => this.confirmar(data)
      )
    }
  }

  createService(){
    var httpOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    return this.http.post<any>("http://localhost:3030/usuario/guardar", this.usuario,httpOptions);
  }

  confirmar(resultado:any){
    this.loading = false;
    if (resultado){
      alert("Contraseña Recuperada Exitosamente");
      this.usuario = {};
    }else{
      alert("Error al Recuperar Contraseña");
    }
  }


  regresar(){
    location.href = "/";
  }

}
