import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'

// Modulos

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AppRoutingModule } from './app-routing.module';
import {AngularFireModule} from '@angular/fire/compat';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './componets/header/header.component';
import { EducacionComponent } from './componets/educacion/educacion.component';
import { HomeComponent } from './componets/home/home.component';
import { BodyComponent } from './componets/body/body.component';
import { ExperienciaComponent } from './componets/experiencia/experiencia.component';
import { ProyectosComponent } from './componets/proyectos/proyectos.component';
import { FooterComponent } from './componets/footer/footer.component';
import { HabilidadComponent } from './componets/habilidad/habilidad.component';
import { LoginComponent } from './componets/login/login.component';
import { RegistrarUsuarioComponent } from './componets/registrar-usuario/registrar-usuario.component';
import { VerificarCorreoComponent } from './componets/verificar-correo/verificar-correo.component';
import { RecuperarPasswordComponent } from './componets/recuperar-password/recuperar-password.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { PorfolioComponent } from './componets/porfolio/porfolio.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EducacionComponent,
    HomeComponent,
    BodyComponent,
    ExperienciaComponent,
    ProyectosComponent,
    FooterComponent,
    HabilidadComponent,
    LoginComponent,
    PorfolioComponent,
    RegistrarUsuarioComponent,
    VerificarCorreoComponent,
    RecuperarPasswordComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
