import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NgForm } from '@angular/forms';
import { Body } from 'src/app/model/body';
import { BodyService } from 'src/app/service/body.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent implements OnInit {
   isLogged = false;

  public bodies:Body[]=[];
  public editBody: Body | undefined;
  public deleteBody: Body | undefined;

  constructor(private bodyService:BodyService,
    private afAuth: AngularFireAuth,) { }

  ngOnInit(): void {
    this.afAuth.currentUser.then(user => {
      if(user && user.emailVerified){
        this.isLogged = true;
      } else {
        this.isLogged = false;
        
      }
    })
    this.getBodies();

  }
  public getBodies():void{
  this.bodyService.getBody().subscribe({
    next:(Response: Body[]) =>{
      this.bodies=Response;
    },
    error:(error:HttpErrorResponse) => {
    alert(error.message);
    }
  })
}
public onOpenModal(mode:String, body?:Body):void{
  const container=document.getElementById('main-container');
  const button=document.createElement('button');
  button.type='button';
  button.style.display='none';
  button.setAttribute('data-toggle','modal')
  if(mode === 'add') {
     button.setAttribute('data-target','#addBodyModal');
  } else if(mode==='delete'){
    this.deleteBody=body;
    button.setAttribute('data-target','#deleteBodyModal');
  }  else if(mode==='edit'){
    this.editBody=body;
    button.setAttribute('data-target','#editBodyModal');
  }
  container?.appendChild(button);
  button.click();

}
  public onAddBody(addForm:NgForm): void {
    document.getElementById('add-body-form')?.click();
    this.bodyService.addBody(addForm.value).subscribe({
       next: (response:Body) =>{
        console.log(response);
        this.getBodies();
        addForm.reset();
       },
       error: (error:HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
       }
       
    })
  
  }
  public onUpdateBody(body:Body){
    this.editBody=body;
    document.getElementById('add-body-form')?.click();
    this.bodyService.updateBody(body).subscribe({
       next: (response:Body) =>{
        console.log(response);
        this.getBodies();
       },
       error: (error:HttpErrorResponse)=>{
        alert(error.message);
       }
    })
  }
  public onDeleteBody(idBody:number):void{
    this.bodyService.deleteBody(idBody).subscribe({
       next: (response:void) =>{
        console.log(response);
        this.getBodies();
       },
       error: (error:HttpErrorResponse)=>{
        alert(error.message);
       }
    })

}

}

