import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  //private apiServerUrl='http://localhost:8080';
  private apiServerUrl='https://back-end-porfolio.herokuapp.com';
  constructor( private http: HttpClient) { }
  
  public getUser():Observable<Usuario>{
  return this.http.get<Usuario>(`${this.apiServerUrl}/usuario/id/1 `); 
}

public updaterUsuario(usuario: Usuario):Observable<Usuario> {
return this.http.put<Usuario> (`${this.apiServerUrl}/usuario/update`, usuario);
}


}
