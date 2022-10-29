import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './componets/login/login.component';
import { RecuperarPasswordComponent } from './componets/recuperar-password/recuperar-password.component';
import { RegistrarUsuarioComponent } from './componets/registrar-usuario/registrar-usuario.component';
import { PorfolioComponent } from './componets/porfolio/porfolio.component';
import { VerificarCorreoComponent } from './componets/verificar-correo/verificar-correo.component';

const routes: Routes = [
  {path:'',component:PorfolioComponent },
  {path:'porfolio',component:PorfolioComponent },
  {path:'login', component:LoginComponent},
  {path:'registrar', component:RegistrarUsuarioComponent},
  {path:'verificar-correo', component:VerificarCorreoComponent},
  {path:'recuperar-password', component:RecuperarPasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
