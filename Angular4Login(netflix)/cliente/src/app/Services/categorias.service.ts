import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

//Servicios utilizados
import { AuthenticationService } from './authentication.service';
//MOdelos
import { Categoria } from '../Models/categoria.model'; 

@Injectable()
export class CategoriasService {

  
 
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
	getCategorias(): Observable<Categoria[]>
	{
		return this.http.get(this.base+'categoria', this.options).map((res: Response) => res.json());
	}

	//POST
	registerCategoria(categoria: Categoria)
	{
		return this.http.post( this.base+'categoria', JSON.stringify(categoria), this.options).map((res: Response) => res.json());

	}

	//GET
	getCategoria(id) : Observable<Categoria>
	{
		return this.http.get(this.base+'categoria/'+id, this.options).map((res: Response) => res.json());
	}

	//PUT
	editCategoria(categoria: Categoria, id: number)
	{
		return this.http.put(this.base+'categoria/'+id, JSON.stringify(categoria), this.options).map((res: Response) => res.json());
	}

	//DELETE
	deleteCAtegoria(id) {
		return this.http.delete(this.base+'categoria/'+id, this.options).map((res: Response) => res.json());
	}

}
