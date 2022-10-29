import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NgForm } from '@angular/forms';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/service/habilidad.service';

@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.css']
})
export class HabilidadComponent implements OnInit {
  isLogged = false;

  public habilidades:Habilidad[]=[];
  deleteHabilidad: Habilidad | undefined;
  editHabilidad: Habilidad | undefined;

  constructor(private habilidadService:HabilidadService,
    private afAuth: AngularFireAuth) { }

  ngOnInit(): void { 
    this.afAuth.currentUser.then(user => {
    if(user && user.emailVerified){
      this.isLogged = true;
    } else {
      this.isLogged = false;
      
    }
  })
    this.getHabilidades();

  }
  public getHabilidades():void{
  this.habilidadService.getHabilidad().subscribe({
    next:(Response: Habilidad[]) =>{
      this.habilidades=Response;
    },
    error:(error:HttpErrorResponse) => {
    alert(error.message);
    }
  })
}

public onOpenModal(mode:String, habilidad?:Habilidad):void{
  const container=document.getElementById('main-container');
  const button=document.createElement('button');
  button.type='button';
  button.style.display='none';
  button.setAttribute('data-toggle','modal')
  if(mode === 'add') {
     button.setAttribute('data-target','#addHabilidadModal');
  } else if(mode==='delete'){
    this.deleteHabilidad=habilidad;
    button.setAttribute('data-target','#deleteHabilidadModal');
  }  else if(mode==='edit'){
    this.editHabilidad=habilidad;
    button.setAttribute('data-target','#editHabilidadModal');
  }
  container?.appendChild(button);
  button.click();

}
  public onAddHabilidad(addForm:NgForm): void {
    document.getElementById('add-habilidad-form')?.click();
    this.habilidadService.addHabilidad(addForm.value).subscribe({
       next: (response:Habilidad) =>{
        console.log(response);
        this.getHabilidades();
        addForm.reset();
       },
       error: (error:HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
       }
       
    })
  
  }
  public onUpdateHabilidad(habilidad:Habilidad){
    this.editHabilidad=habilidad;
    document.getElementById('add-habilidad-form')?.click();
    this.habilidadService.updateHabilidad(habilidad).subscribe({
       next: (response:Habilidad) =>{
        console.log(response);
        this.getHabilidades();
       },
       error: (error:HttpErrorResponse)=>{
        alert(error.message);
       }
    })
  }
  public onDeleteHabilidad(idHab:number):void{
    this.habilidadService.deleteHabilidad(idHab).subscribe({
       next: (response:void) =>{
        console.log(response);
        this.getHabilidades();
       },
       error: (error:HttpErrorResponse)=>{
        alert(error.message);
       }
    })

}

}