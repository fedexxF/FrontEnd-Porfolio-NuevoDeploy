import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  
  //private apiServerUrl='http://localhost:8080';
  //private apiServerUrl='https://back-end-porfolio.herokuapp.com';
  private apiServerUrl='https://backend-porfolio-nuevodeploy-production.up.railway.app';
  constructor(private http:HttpClient) { }
 
  public getExperiencia():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(`${this.apiServerUrl}/experiencia/all `)
  }
   public addExperiencia(experiencia : Experiencia):Observable<Experiencia>{
    return this.http.post<Experiencia>(`${this.apiServerUrl}/experiencia/add `,experiencia)
   }
   public updateExperiencia(experiencia : Experiencia):Observable<Experiencia>{
    return this.http.post<Experiencia>(`${this.apiServerUrl}/experiencia/update `,experiencia)
   }
   public deleteExperiencia(experienciaId : number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/experiencia/delete/${experienciaId} `);
   }
}
