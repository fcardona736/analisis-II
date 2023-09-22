import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuario:any = {};

  usuarios:any = [];

  persona:any = {};

  crear:boolean = false;

  loading:boolean = false;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.usuario = JSON.parse(localStorage.getItem("usuario") || '{}');
    if(!this.usuario){
      location.href = "/";
    }else{
      this.persona = {nombre:this.persona}
      this.buscarUsuarios();
    }
  }

  logout(){
    localStorage.removeItem("usuario");
    location.href = "/";
  }

  buscarUsuarios(){
    this.buscarUsuariosServicio().subscribe(
      (response:any) => this.usuarios = response
    )
  }

  buscarUsuariosServicio():Observable<any>{
    return this.http.get<any>("http://localhost:3030/curso/buscar").pipe(catchError (e => "eror" ))
  }

  eliminar(user:any){
    this.eliminarUsuariosServicio(user.idusuario).subscribe(
      (response:any) => this.buscarUsuarios()
    )
  }

  eliminarUsuariosServicio(id:any):Observable<any>{
    return this.http.delete<any>("http://localhost:3030/curso/eliminar/"+id).pipe(catchError (e => "eror" ))
  }

  buscarUsuarioServicio():Observable<any>{
    return this.http.get<any>("http://localhost:3030/usuario")
  }

  editar(user:any){
    localStorage.setItem("editarUsuario",JSON.stringify(user))
    location.href = "/editar-usuario";
  }

}
