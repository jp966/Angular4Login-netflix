import { Component, ElementRef, OnInit, ViewChild, Inject } from '@angular/core';

import { EditarNoticiaComponent } from './editar-noticia/editar-noticia.component';
import { AgregarNoticiaComponent } from './agregar-noticia/agregar-noticia.component';
import { DetalleNoticiaComponent } from './detalle-noticia/detalle-noticia.component';

import { Categoria } from '../../Models/categoria.model';
import { CategoriasService } from '../../Services/categorias.service';

import { Usuario } from '../../Models/usuario.model';
import { UsuariosService } from '../../Services/usuarios.service';

import { NoticiasService } from '../../Services/noticias.service';
import { Noticia } from '../../Models/noticia.model'; 

import { EventosService } from '../../Services/eventos.service';

//paginator
import {NgxPaginationModule} from 'ngx-pagination';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {

  public totalNoticias:Noticia[];
  public totalCategorias:Categoria[];
  public totalUsuarios:Usuario[];
  //booleano para saber si esta logeado o no
  public isLogged:boolean=false;
  //pagina de paginator
  public p:number=1;

  constructor(public servicioNoticia:NoticiasService,public servicioCategoria:CategoriasService,
    public dialog: MatDialog, public servicioUsuario:UsuariosService, 
      public eventosService:EventosService) {

      //se determina si esta logeado o no el usuario
     if(localStorage.getItem('currentUser')){
       this.isLogged=true;
     }

     this.eventosService.isSignIn.subscribe(data=>{
       this.isLogged=true;
     });


  	this.totalNoticias=[];
    this.totalCategorias=[];
    this.totalUsuarios=[];
    this.actualizarUsuarios();
    this.actualizarCategorias();
    this.actualizarNoticias();

   }

  ngOnInit() {

  }


//funciones para llamar dialogs a través de los botones de acciones
actualizarCategorias ()
  {
    this.servicioCategoria.getCategorias().subscribe(data => {
      var todo: any = data;
      this.totalCategorias = todo;
    });
  }

 actualizarUsuarios(){
   this.servicioUsuario.getUsuarios().subscribe(data=>{
     var todo:any=data;
     this.totalUsuarios=data;
   })

 }


  actualizarNoticias ()
  {
    this.servicioNoticia.getNoticias().subscribe(data => {
      var todo: any = data;
      this.totalNoticias = todo;
      this.reemplazarIdPorString();
      this.reemplazarIdPorStringUsuario();

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
    this.pasarStringIdUsuario(a);

    let dialogRef = this.dialog.open(EditarNoticiaComponent, {
      width: '700px',
      data:
      {
       noticia: a,
       totalCategorias:this.totalCategorias,
       servicioCategoria:this.servicioCategoria,
       servicioNoticia:this.servicioNoticia
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

//serialización de categoría--
    reemplazarIdPorString()
  {
    for(let i = 0 ; i < this.totalNoticias.length ; i ++)
    {

      for(let j = 0 ; j < this.totalCategorias.length ; j++)
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

  //-----

  //serialización del usuario

    reemplazarIdPorStringUsuario()
  {
    for(let i = 0 ; i < this.totalNoticias.length ; i ++)
    {

      for(let j = 0 ; j < this.totalUsuarios.length ; j++)
      {
        if(parseInt(this.totalNoticias[i].usuario_id) === this.totalUsuarios[j].id)
        {
          this.totalNoticias[i].usuario_id = this.totalUsuarios[j].name;
          break;
        }
      }

    }
  }


  pasarStringIdUsuario(noticia)
  {
    for ( let i = 0 ; i < this.totalUsuarios.length ; i ++)
    {
      if(noticia.usuario_id === this.totalUsuarios[i].name)
        {
          noticia.usuario_id = this.totalUsuarios[i].id;
        }
    }

  }




}
