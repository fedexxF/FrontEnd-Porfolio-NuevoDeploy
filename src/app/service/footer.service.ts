import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Footer } from '../model/footer';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  //private apiServerUrl='http://localhost:8080';
  //private apiServerUrl='https://back-end-porfolio.herokuapp.com';
  private apiServerUrl='https://backend-porfolio-nuevodeploy-production.up.railway.app';
  constructor(private http:HttpClient) { }

public getFooter():Observable<Footer[]>{
  return this.http.get<Footer[]>(`${this.apiServerUrl}/footer/all `)
}
 public addFooter(footer : Footer):Observable<Footer>{
  return this.http.post<Footer>(`${this.apiServerUrl}/footer/add `,footer)
 }
 public updateFooter(footer : Footer):Observable<Footer>{
  return this.http.post<Footer>(`${this.apiServerUrl}/footer/update `,footer)
 }
 public deleteFooter(footerId : number):Observable<void>{
  return this.http.delete<void>(`${this.apiServerUrl}/footer/delete/${footerId} `);
 }
}
