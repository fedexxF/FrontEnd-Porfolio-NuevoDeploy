import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Home } from '../model/home';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  
  private apiServerUrl='http://localhost:8080';
  //private apiServerUrl='https://back-end-porfolio.herokuapp.com';
  constructor(private http:HttpClient) { }
 
  public getHome():Observable<Home[]>{
    return this.http.get<Home[]>(`${this.apiServerUrl}/home/all `)
  }
   public addHome(home : Home):Observable<Home>{
    return this.http.post<Home>(`${this.apiServerUrl}/home/add `,home)
   }
   public updateHome(home : Home):Observable<Home>{
    return this.http.post<Home>(`${this.apiServerUrl}/home/update `,home)
   }
   public deleteHome(homeId : number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/home/delete/${homeId} `);
   }
}

