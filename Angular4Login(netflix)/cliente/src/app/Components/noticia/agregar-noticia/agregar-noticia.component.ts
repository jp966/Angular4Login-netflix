import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Noticia } from '../../../Models/noticia.model';
import { NoticiasService } from '../../../Services/noticias.service';
@Component({
  selector: 'app-agregar-noticia',
  templateUrl: './agregar-noticia.component.html',
  styleUrls: ['./agregar-noticia.component.css']
})
export class AgregarNoticiaComponent{

public nuevaNoticia: Noticia;

  constructor(
  	public dialogRef: MatDialogRef<AgregarNoticiaComponent>,
	@Inject(MAT_DIALOG_DATA) public data: any,
	public servicioNoticia: NoticiasService

  	) {

  		this.nuevaNoticia=new Noticia();

  	 }


  	onNoClick()
	{
		this.dialogRef.close();
	}

	agregarEstadoCita()
	{
		this.servicioNoticia.registerNoticia(this.nuevaNoticia).subscribe(data => {
			console.log(data);
			this.dialogRef.close();
		});
	}


}
