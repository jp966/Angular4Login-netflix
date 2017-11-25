import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Noticia } from '../../../Models/noticia.model';
import { Categoria } from '../../../Models/categoria.model';
@Component({
  selector: 'app-agregar-noticia',
  templateUrl: './agregar-noticia.component.html',
  styleUrls: ['./agregar-noticia.component.css']
})
export class AgregarNoticiaComponent implements OnInit{

public nuevaNoticia: Noticia;
public totalCategorias: Categoria;
public servicioCategoria:any;
public servicioNoticia:any;

  constructor(
  	public dialogRef: MatDialogRef<AgregarNoticiaComponent>,
	@Inject(MAT_DIALOG_DATA) public data: any

  	) {

  		this.nuevaNoticia=new Noticia();
      this.nuevaNoticia.usuario_id=JSON.parse(localStorage.getItem('idCurrent')).id;
  		this.totalCategorias=data.totalCategorias;
  		this.servicioNoticia=data.servicioNoticia;
  		this.servicioCategoria=data.servicioCategoria

  	 }

  	 ngOnInit(){
  	 	this.servicioCategoria.getCategorias().subscribe(data=>{
  	 		this.totalCategorias=data;
  	 	});
  	 }

  	onNoClick()
	{
		this.dialogRef.close();
	}

	agregarNoticia()
	{
		this.servicioNoticia.registerNoticia(this.nuevaNoticia).subscribe(data => {
			console.log(data);
			this.dialogRef.close();
		});
	}

		categoriaSeleccionada(categoria)
	{
		this.nuevaNoticia.categoria_id = categoria.id;
	}


}
