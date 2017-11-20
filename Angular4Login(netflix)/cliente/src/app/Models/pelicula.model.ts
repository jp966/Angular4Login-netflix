export class Pelicula {
  id: number;
  titulo: string;
  descripcion: string;
  director:string;
  precio:number;

  constructor()
  {
	this.id = 0;
	this.titulo = "";
	this.descripcion = "";
	this.director="";
	this.precio=0;
  }
}
