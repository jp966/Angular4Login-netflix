import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../Components/login/login.component';

import { PeliculasComponent } from '../Components/peliculas/peliculas.component';

import { PrincipalComponent } from '../Components/principal/principal.component'; 

import { AuthGuard } from '../Guards/auth.guard';

import { LoginGuard } from '../Guards/login.guard';

import { NoticiaComponent } from '../Components/noticia/noticia.component';

const routes: Routes =
[

  { path: 'login',  component: LoginComponent, canActivate: [LoginGuard]},
  
  { path: 'peliculas',  component: PeliculasComponent, canActivate: [AuthGuard]},

  { path: 'noticias', component: NoticiaComponent},

  { path: '',  component: PrincipalComponent }

];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);

