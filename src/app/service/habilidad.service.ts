import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Habilidad } from '../model/habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {

  private apiServerUrl='http://localhost:8080';
  //private apiServerUrl='https://back-end-porfolio.herokuapp.com';
  constructor(private http:HttpClient) { }
 
  public getHabilidad():Observable<Habilidad[]>{
    return this.http.get<Habilidad[]>(`${this.apiServerUrl}/habilidad/all `)
  }
   public addHabilidad(habilidad : Habilidad):Observable<Habilidad>{
    return this.http.post<Habilidad>(`${this.apiServerUrl}/habilidad/add `,habilidad)
   }
   public updateHabilidad(habilidad : Habilidad):Observable<Habilidad>{
    return this.http.post<Habilidad>(`${this.apiServerUrl}/habilidad/update `,habilidad)
   }
   public deleteHabilidad(habilidadId : number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/habilidad/delete/${habilidadId} `);
   }
}