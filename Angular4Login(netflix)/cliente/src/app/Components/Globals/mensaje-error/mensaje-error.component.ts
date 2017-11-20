import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-mensaje-error',
  templateUrl: './mensaje-error.component.html',
  styleUrls: ['./mensaje-error.component.css']
})
export class MensajeErrorComponent implements OnInit {

public mensajeError: string;

  constructor
  (
  	public dialogRef: MatDialogRef<MensajeErrorComponent>,
	  @Inject(MAT_DIALOG_DATA) public data: any

  	) 
  { 

  	this.mensajeError=data.mensajeError;


  }

  ngOnInit() 
  {

  }

  onNoClick()
	{
		this.dialogRef.close();
	}


}
