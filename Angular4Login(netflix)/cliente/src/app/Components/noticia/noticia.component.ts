import { Component, ElementRef, OnInit, ViewChild, Inject } from '@angular/core';

import { EditarNoticiaComponent } from './editar-noticia/editar-noticia.component';
import { AgregarNoticiaComponent } from './agregar-noticia/agregar-noticia.component';
import { DetalleNoticiaComponent } from './detalle-noticia/detalle-noticia.component';

import { Categoria } from '../../Models/categoria.model';
import { CategoriasService } from '../../Services/categorias.service';

//DATATABLE
import {DataSource} from '@angular/cdk/collections';
import {MatPaginator, MatSort} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';
import { ExampleDatabase, ExampleDataSource } from '../Globals/datasource.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';



import { NoticiasService } from '../../Services/noticias.service';
import { Noticia } from '../../Models/noticia.model'; 

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {

  public totalNoticias:Noticia[];
  public totalCategorias:Categoria[];
  public buscarPorTitular: boolean;

  displayedColumns = ['Acciones', 'Titular', 'Entrada'];


  //DATATABLE
  exampleDatabase;
  selection = new SelectionModel<string>(true, []);
  dataSource: ExampleDataSource | null;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('filter') filter: ElementRef;

  constructor(public servicioNoticia:NoticiasService,public servicioCategoria:CategoriasService,public dialog: MatDialog) {

  	this.totalNoticias=[];
    this.totalCategorias=[];
    this.actualizarCategorias();
    this.actualizarNoticias();

   }

  ngOnInit() {

    this.dataSource = new ExampleDataSource(new ExampleDatabase([]), this.paginator, this.sort, 'Noticia');
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
        .debounceTime(150)
        .distinctUntilChanged()
        .subscribe(() => {
          if (!this.dataSource) { return; }
          this.dataSource.filter = this.filter.nativeElement.value;
        })


    this.exampleDatabase = []

  }


  isAllSelected(): boolean
  {
    if (!this.dataSource) { return false; }
    if (this.selection.isEmpty()) { return false; }

    if (this.filter.nativeElement.value) {
      return this.selection.selected.length == this.dataSource.renderedData.length;
    } else {
      return this.selection.selected.length == this.exampleDatabase.data.length;
    }
  }

  masterToggle()
  {
    if (!this.dataSource) { return; }

    if (this.isAllSelected()) {
      this.selection.clear();
    } else if (this.filter.nativeElement.value) {
      this.dataSource.renderedData.forEach(data => this.selection.select(data.id));
    } else {
      this.exampleDatabase.data.forEach(data => this.selection.select(data.id));
    }
  }

actualizarCategorias ()
  {
    this.servicioCategoria.getCategorias().subscribe(data => {
      var todo: any = data;
      //todo = todo.data;
      this.totalCategorias = todo;
    });
  }


  actualizarNoticias ()
  {
    this.servicioNoticia.getNoticias().subscribe(data => {
      var todo: any = data;
      //todo = todo.data;
      this.totalNoticias = todo;
      this.reemplazarIdPorString();

      //DATATABLE
      this.exampleDatabase  = new ExampleDatabase(this.totalNoticias);

      this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort, 'Noticia');
      Observable.fromEvent(this.filter.nativeElement, 'keyup')
          .debounceTime(150)
          .distinctUntilChanged()
          .subscribe(() => {
            if (!this.dataSource) { return; }
            this.dataSource.filter = this.filter.nativeElement.value;
          })


    });
  }

  eliminarNoticia (noticia)
  {
    
      this.servicioNoticia.deleteNoticia(noticia.id).subscribe( data => {
        console.log(data);
        this.actualizarNoticias();
      });
    }

  


  edicionNoticia (noticia)
  {

    var a = JSON.parse( JSON.stringify(noticia) );

    this.pasarStringId(a);

    let dialogRef = this.dialog.open(EditarNoticiaComponent, {
      width: '700px',
      data:
      {
       noticia: a
      }
    });

    dialogRef.afterClosed().subscribe(result => {

      this.actualizarNoticias();
    });
  }

  agregacionNoticia()
  {
    let dialogRef = this.dialog.open(AgregarNoticiaComponent, {
      width: '700px',
      data:{
        totalCategorias:this.totalCategorias,
        servicioCategoria:this.servicioCategoria,
        servicioNoticia:this.servicioNoticia
      }
    });

    dialogRef.afterClosed().subscribe(result => {

      this.actualizarNoticias();
    });
  }


   detalleNoticia(noticia)
  {

   // var a = JSON.parse( JSON.stringify(noticia) );

   // this.pasarStringId(a);


    let dialogRef = this.dialog.open(DetalleNoticiaComponent, {
      width: '700px',
      data:{
        noticia:noticia
      }
    });

    dialogRef.afterClosed().subscribe(result => {

      this.actualizarNoticias();
    });
  }


    reemplazarIdPorString()
  {
    for(let i = 0 ; i < this.totalNoticias.length ; i ++)
    {

      for(let j = 0 ; j < this.totalNoticias.length ; j++)
      {
        if(parseInt(this.totalNoticias[i].categoria_id) === this.totalCategorias[j].id)
        {
          this.totalNoticias[i].categoria_id = this.totalCategorias[j].descripcion;
          break;
        }
      }

    }
  }


  pasarStringId(noticia)
  {
    for ( let i = 0 ; i < this.totalCategorias.length ; i ++)
    {
      if(noticia.categoria_id === this.totalCategorias[i].descripcion)
        {
          noticia.categoria_id = this.totalCategorias[i].id;
        }
    }

  }



}
