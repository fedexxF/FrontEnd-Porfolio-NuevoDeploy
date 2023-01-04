import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Body } from '../model/body'

@Injectable({
  providedIn: 'root'
})
export class BodyService {

   //private apiServerUrl='http://localhost:8080';
   //private apiServerUrl='https://back-end-porfolio.herokuapp.com';
   private apiServerUrl='https://backend-porfolio-nuevodeploy-production.up.railway.app';
  constructor(private http:HttpClient) { }
 
  public getBody():Observable<Body[]>{
    return this.http.get<Body[]>(`${this.apiServerUrl}/body/all `)
  }
   public addBody(body : Body):Observable<Body>{
    return this.http.post<Body>(`${this.apiServerUrl}/body/add `,body)
   }
   public updateBody(body : Body):Observable<Body>{
    return this.http.post<Body>(`${this.apiServerUrl}/body/update `,body)
   }
   public deleteBody(bodyId : number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/body/delete/${bodyId} `);
   }
}


