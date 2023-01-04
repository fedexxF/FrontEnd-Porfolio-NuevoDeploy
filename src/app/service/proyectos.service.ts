import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyectos } from '../model/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  //private apiServerUrl='http://localhost:8080';
  //private apiServerUrl='https://back-end-porfolio.herokuapp.com';
  private apiServerUrl='https://backend-porfolio-nuevodeploy-production.up.railway.app';
  constructor(private http:HttpClient) { }

public getProyectos():Observable<Proyectos[]>{
  return this.http.get<Proyectos[]>(`${this.apiServerUrl}/proyectos/all `)
}
 public addProyectos(proyectos : Proyectos):Observable<Proyectos>{
  return this.http.post<Proyectos>(`${this.apiServerUrl}/proyectos/add `,proyectos)
 }
 public updateProyectos(proyectos : Proyectos):Observable<Proyectos>{
  return this.http.post<Proyectos>(`${this.apiServerUrl}/proyectos/update `,proyectos)
 }
 public deleteProyectos(proyectosId : number):Observable<void>{
  return this.http.delete<void>(`${this.apiServerUrl}/proyectos/delete/${proyectosId} `);
 }
}
 