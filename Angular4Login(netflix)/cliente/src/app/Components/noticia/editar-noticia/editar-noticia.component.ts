import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-editar-noticia',
  templateUrl: './editar-noticia.component.html',
  styleUrls: ['./editar-noticia.component.css']
})
export class EditarNoticiaComponent implements OnInit {

public noticia:any;
public servicioCategoria:any;
public totalCategorias:any;
public servicioNoticia:any;

  constructor(	
  	public dialogRef: MatDialogRef<EditarNoticiaComponent>,
	@Inject(MAT_DIALOG_DATA) public data: any

	) {

  		this.noticia=data.noticia;
  		this.servicioCategoria=data.servicioCategoria;
  		this.totalCategorias=data.totalCategorias;
  		this.servicioNoticia=data.servicioNoticia;

   }

  ngOnInit() {
  	this.servicioCategoria.getCategorias().subscribe(data=>{
  		this.totalCategorias=data;
  	});
  }

  onNoClick()
	{
		this.dialogRef.close();
	}

	editarNoticia()
	{
		this.servicioNoticia.editNoticia(this.noticia,this.noticia.id).subscribe( data => {
			console.log(data);
			this.dialogRef.close();

		});
	}

	categoriaSeleccionada(categoria){
		this.noticia.categoria_id=categoria.id;
	}

}
