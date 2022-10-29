import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NgForm } from '@angular/forms';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  isLogged =false;

 
  public proyectos:Proyectos[]=[];
  deleteProyectos: Proyectos | undefined;
  editProyectos: Proyectos | undefined;

  constructor(private proyectosService:ProyectosService,
    private afAuth: AngularFireAuth,) { }

  ngOnInit(): void {
    this.afAuth.currentUser.then(user => {
      if(user && user.emailVerified){
        this.isLogged = true;
      } else {
        this.isLogged = false;
        
      }
    })

    this.getProyectos();

  }
  public getProyectos():void{
  this.proyectosService.getProyectos().subscribe({
    next:(Response: Proyectos[]) =>{
      this.proyectos=Response;
    },
    error:(error:HttpErrorResponse) => {
    alert(error.message);
    }
  })
}

public onOpenModal(mode:String, proyectos?:Proyectos):void{
  const container=document.getElementById('main-container');
  const button=document.createElement('button');
  button.type='button';
  button.style.display='none';
  button.setAttribute('data-toggle','modal')
  if(mode === 'add') {
     button.setAttribute('data-target','#addProyectosModal');
  } else if(mode==='delete'){
    this.deleteProyectos=proyectos;
    button.setAttribute('data-target','#deleteProyectosModal');
  }  else if(mode==='edit'){
    this.editProyectos=proyectos;
    button.setAttribute('data-target','#editProyectosModal');
  }
  container?.appendChild(button);
  button.click();

}
  public onAddProyectos(addForm:NgForm): void {
    document.getElementById('add-proyectos-form')?.click();
    this.proyectosService.addProyectos(addForm.value).subscribe({
       next: (response:Proyectos) =>{
        console.log(response);
        this.getProyectos();
        addForm.reset();
       },
       error: (error:HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
       }
       
    })
  
  }
  public onUpdateProyectos(proyectos:Proyectos){
    this.editProyectos=proyectos;
    document.getElementById('add-proyectos-form')?.click();
    this.proyectosService.updateProyectos(proyectos).subscribe({
       next: (response:Proyectos) =>{
        console.log(response);
        this.getProyectos();
       },
       error: (error:HttpErrorResponse)=>{
        alert(error.message);
       }
    })
  }
  public onDeleteProyectos(idProyectos:number):void{
    this.proyectosService.deleteProyectos(idProyectos).subscribe({
       next: (response:void) =>{
        console.log(response);
        this.getProyectos();
       },
       error: (error:HttpErrorResponse)=>{
        alert(error.message);
       }
    })

}

}
