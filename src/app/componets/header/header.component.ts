import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { userInfo } from 'os';
import { Usuario } from 'src/app/model/usuario';
import { HeaderService } from 'src/app/service/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged =false;
  dataUser: any;
  public usuario : Usuario | undefined;
  public editUsuario: Usuario | undefined;
   constructor(private headerService : HeaderService,
    private afAuth: AngularFireAuth,
    private router:Router
    ) { }
 
   ngOnInit(): void {
    this.afAuth.currentUser.then(user => {
      if(user && user.emailVerified){
        this.isLogged = true;
        this.dataUser = user
      } else {
        this.isLogged = false;
        
      }
    })
     this.getUser();
   }
    LogOut():void{ 
        this.afAuth.signOut().then(()=> 
        this.router.navigate(['']));
    }
    login():void{ 
      this.router.navigate(['']);
  }
     public getUser(): void{
       this.headerService.getUser().subscribe({
         next: (response: Usuario) =>{
           this.usuario=response;
         },
         error:(error:HttpErrorResponse) =>{
         alert(error.message);
         }
       })
     }
   
 }
