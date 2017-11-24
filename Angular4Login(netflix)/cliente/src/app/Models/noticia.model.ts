export class Noticia {

  id: number;
  titular:string;
  entrada:string;
  cuerpo:string;
  imagen:string;
  fecha:string;
  categoria_id:string;
  usuario_id:number;

  constructor()
  {
	this.id = 0;
	this.titular="";
	this.entrada="";
	this.imagen="";
	this.fecha=new Date().toISOString().slice(0, 19).replace('T', ' ');;
	this.categoria_id="";
	this.usuario_id=0;
  }
}
