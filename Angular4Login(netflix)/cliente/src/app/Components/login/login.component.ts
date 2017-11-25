import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService }  from '../../Services/authentication.service';
import { EventosService } from '../../Services/eventos.service';

import { Usuario } from '../../Models/usuario.model';
import { UsuariosService } from '../../Services/usuarios.service';  

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	public password:string;
	public email:string;
  

  constructor(public router:Router, public authService:AuthenticationService,
                public eventosService:EventosService,public servicioUsuario:UsuariosService) { 

	}

  ngOnInit() {
  }

  login(){

  	if(this.password != "" && this.email != ""){

  		this.authService.login(this.email,this.password).subscribe((data)=>{

        this.servicioUsuario.getUsuarios().subscribe(data=>{

          var currentUser: any = data.filter( usuario => usuario.email === this.email);

          var idCurrent = currentUser[0].id;

          console.log(idCurrent);

          var id=JSON.stringify({"id":idCurrent});
          localStorage.setItem('idCurrent',id);

          this.eventosService.SignIn();
          this.router.navigate(['noticias']);

        });

       


  		});

        



  	}


  }

}
