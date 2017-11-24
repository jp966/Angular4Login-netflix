import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Noticia } from '../../../Models/noticia.model';
import { Categoria } from '../../../Models/categoria.model';
@Component({
  selector: 'app-detalle-noticia',
  templateUrl: './detalle-noticia.component.html',
  styleUrls: ['./detalle-noticia.component.css']
})
export class DetalleNoticiaComponent implements OnInit {

	public noticia:any;

  constructor(
  	public dialogRef: MatDialogRef<DetalleNoticiaComponent>,
	@Inject(MAT_DIALOG_DATA) public data: any
	) { 

  	this.noticia=data.noticia;

  }

  ngOnInit() {
  }

  	onNoClick()
	{
		this.dialogRef.close();
	}

}
