import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

//Servicios utilizados
import { AuthenticationService } from './authentication.service';
//MOdelos
import { Noticia } from '../Models/noticia.model'; 
@Injectable()
export class NoticiasService {

 
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
	getNoticias(): Observable<Noticia[]>
	{
		return this.http.get(this.base+'noticia', this.options).map((res: Response) => res.json());
	}

	//POST
	registerNoticia(noticia: Noticia)
	{
		return this.http.post( this.base+'noticia', JSON.stringify(noticia), this.options).map((res: Response) => res.json());

	}

	//GET
	getNoticia(id) : Observable<Noticia>
	{
		return this.http.get(this.base+'noticia/'+id, this.options).map((res: Response) => res.json());
	}

	//PUT
	editNoticia(noticia: Noticia, id: number)
	{
		return this.http.put(this.base+'noticia/'+id, JSON.stringify(noticia), this.options).map((res: Response) => res.json());
	}

	//DELETE
	deleteNoticia(id) {
		return this.http.delete(this.base+'noticia/'+id, this.options).map((res: Response) => res.json());
	}

}
