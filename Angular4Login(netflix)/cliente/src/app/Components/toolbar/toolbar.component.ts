import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventosService } from '../../Services/eventos.service';
import { AuthenticationService } from '../../Services/authentication.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class toolbarComponent implements OnInit {

  public isLogged:boolean=false;

  constructor(public router:Router, public eventosService:EventosService,
    public authService:AuthenticationService) {


     if(localStorage.getItem('currentUser')){
       this.isLogged=true;
     }

     this.eventosService.isSignIn.subscribe(data=>{
       this.isLogged=true;
     });

   }

  ngOnInit() {
  }

  irLogin(){
  	this.router.navigate(['login']);
  }

  irInicio(){
    this.router.navigate(['']);
  }

  irNoticias(){
    this.router.navigate(['noticias']);
  
  }

  irMisNoticias(){
    this.router.navigate(['noticias-usuario']);
  }


  cerrarSesion(){
    this.isLogged=false;
    this.authService.logout();
    this.router.navigate(['']);

  }




}
