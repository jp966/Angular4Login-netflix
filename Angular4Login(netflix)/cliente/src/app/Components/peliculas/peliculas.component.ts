import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../Services/peliculas.service';
import { Pelicula } from '../../Models/pelicula.model'; 

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

	public totalPeliculas:Pelicula[];

  constructor(public servicioPeliculas:PeliculasService) {

  	this.totalPeliculas=[];
  	this.obtenerPeliculas();

   }

  ngOnInit() {
  }

  obtenerPeliculas(){
  	this.servicioPeliculas.getPeliculas().subscribe(data=>{
  		
		this.totalPeliculas=data;

  	});
  }



}
