//SERVICIOS
import {AuthenticationService} from './Services/authentication.service';
import { EventosService } from './Services/eventos.service';
import { NoticiasService } from './Services/noticias.service';
import { CategoriasService } from './Services/categorias.service';
import { UsuariosService } from './Services/usuarios.service';

//PIPES
import {NgxPaginationModule} from 'ngx-pagination';

//GUARDS
import { AuthGuard } from './Guards/auth.guard'; 
import { LoginGuard } from './Guards/login.guard';

//MODULOS
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './Routes/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';


// COMPONENTES

//Componentes Raices
import { AppComponent } from './app.component';
//LOGIN
//OTROS
import { MensajeErrorComponent } from './Components/Globals/mensaje-error/mensaje-error.component';
import { LoginComponent } from './Components/login/login.component';
import { toolbarComponent } from './Components/toolbar/toolbar.component';
import { PrincipalComponent } from './Components/principal/principal.component';
import { NoticiaComponent } from './Components/noticia/noticia.component';
import { CategoriaComponent } from './Components/categoria/categoria.component';
import { AgregarNoticiaComponent } from './Components/noticia/agregar-noticia/agregar-noticia.component';
import { EditarNoticiaComponent } from './Components/noticia/editar-noticia/editar-noticia.component';
import { DetalleNoticiaComponent } from './Components/noticia/detalle-noticia/detalle-noticia.component';
import { MiNoticiaComponent } from './Components/noticia/mi-noticia/mi-noticia.component';




@NgModule({
  declarations:
  [
    //Componentes Raiz
    AppComponent,
    MensajeErrorComponent,
    LoginComponent,
    toolbarComponent,
    PrincipalComponent,
    NoticiaComponent,
    CategoriaComponent,
    AgregarNoticiaComponent,
    EditarNoticiaComponent,
    DetalleNoticiaComponent,
    MiNoticiaComponent
  ],

  entryComponents:
  [
    //Componentes de entrada para Modales en Materialize
   
    MensajeErrorComponent,
    AgregarNoticiaComponent,
    EditarNoticiaComponent,
    DetalleNoticiaComponent
  ],


  imports:
  [
    ReactiveFormsModule,
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatFormFieldModule,
    NgxPaginationModule,
  ],

  providers:
  [

   //SERVICIOS
    appRoutingProviders,
    AuthenticationService,
    EventosService,
    NoticiasService,
    CategoriasService,
    UsuariosService,

    //GUARDS
    AuthGuard,
    LoginGuard,
  ],

  bootstrap:
  [
    AppComponent
  ]

})

export class AppModule { }
