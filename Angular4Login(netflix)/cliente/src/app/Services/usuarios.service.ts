import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

//Servicios utilizados
import { AuthenticationService } from './authentication.service';
//MOdelos
import { Usuario } from '../Models/usuario.model'; 


@Injectable()
export class UsuariosService {

	public base: string = "http://localhost:8000/api/";
	public options: RequestOptions;
	public headers: Headers;

  constructor(private http: Http, private authenticationService: AuthenticationService) { 

  	this.headers = new Headers(
		{
			'Authorization': 'Bearer ' + this.authenticationService.token,
			'Content-Type': 'application/json'
		});

	this.options = new RequestOptions({ headers: this.headers });


  }

  //GET
	getUsuarios(): Observable<Usuario[]>
	{
		return this.http.get(this.base+'user', this.options).map((res: Response) => res.json());
	}

	//POST
	registerUsuario(usuario: Usuario)
	{
		return this.http.post( this.base+'user', JSON.stringify(usuario), this.options).map((res: Response) => res.json());

	}

	//GET
	getUsuario(id) : Observable<Usuario>
	{
		return this.http.get(this.base+'user/'+id, this.options).map((res: Response) => res.json());
	}

	//PUT
	editUsuario(usuario: Usuario, id: number)
	{
		return this.http.put(this.base+'user/'+id, JSON.stringify(usuario), this.options).map((res: Response) => res.json());
	}

	//DELETE
	deleteUsuario(id) {
		return this.http.delete(this.base+'user/'+id, this.options).map((res: Response) => res.json());
	}

}
