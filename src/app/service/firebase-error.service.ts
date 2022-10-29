import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseErrorService {

  constructor() { }

  firebaseError(code:string){
    switch(code){
     case 'auth/email-already-in-use':
       return 'El usuario ya existe'
      case 'auth/weak-password':
        return 'La contraseña es muy corta'
       case 'auth/invalid-email':
        return 'El email ingresado es invalido'
       case 'auth/wrong-password':
         return 'Contraseña Incorrecta'
        case 'auth/user-not-found':
          return 'Contraseña Incorrecta'
        default:
          return 'Error desconocido'
    }
  }
 

}
