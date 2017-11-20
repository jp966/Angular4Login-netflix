import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

//Servicios utilizados
import { AuthenticationService } from './authentication.service';
//MOdelos
import { Pelicula } from '../Models/pelicula.model'; 

@Injectable()
export class PeliculasService {

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
	getPeliculas(): Observable<Pelicula[]>
	{
		return this.http.get(this.base+'pelicula', this.options).map((res: Response) => res.json());
	}

}
