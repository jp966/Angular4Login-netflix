//DATATABLES
import {DataSource} from '@angular/cdk/collections';
import {MatPaginator, MatSort} from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { Component, ElementRef, ViewChild, Inject } from '@angular/core';




export class ExampleDatabase {

  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  get data(): any[] { return this.dataChange.value; }

  constructor(ec)
  {
    // Fill up the database with 100 users.
    for (let i = 0; i < ec.length; i++) { this.addUser(ec[i]); }
  }

  /** Adds a new user to the database. */
  addUser(ec) {
    const copiedData = this.data.slice();
    copiedData.push(ec);
    this.dataChange.next(copiedData);
  }



}


export class dataTable extends DataSource<any> {
  _filterChange = new BehaviorSubject('');
  get filter(): string { return this._filterChange.value; }
  set filter(filter: string) { this._filterChange.next(filter); }

  constructor(private _exampleDatabase: ExampleDatabase, private _paginator: MatPaginator) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<any[]> {

    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._paginator.page,
      this._filterChange,
    ];

    return Observable.merge(...displayDataChanges).map(() => {

      const data = this._exampleDatabase.data.slice();
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;


      return data.splice(startIndex, this._paginator.pageSize);

    });
  }

  disconnect() {}
}



export class buscadorPorNombre extends DataSource<any> {
  _filterChange = new BehaviorSubject('');
  get filter(): string { return this._filterChange.value; }
  set filter(filter: string) { this._filterChange.next(filter); }
  public filtro;

  constructor(private _exampleDatabase: ExampleDatabase, filtro) {
    super();
    this.filtro = filtro;
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<any[]> {
    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._filterChange,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      return this._exampleDatabase.data.slice().filter((item: any) => {



        if(this.filtro === "Usuario")
        {
           let searchStr = (item.email ).toLowerCase();
        return searchStr.indexOf(this.filter.toLowerCase()) != -1;
        }
        else if( this.filtro === "Role")
        {
           let searchStr = (item.nombre ).toLowerCase();
        return searchStr.indexOf(this.filter.toLowerCase()) != -1;
        }
        else if( this.filtro === "EC" || this.filtro === "Region" || this.filtro === "Provincia" || this.filtro === "Comuna" || this.filtro === "Prevision" || this.filtro === "Genero" || this.filtro === "EstadoCita" || this.filtro === "Especialidad" || this.filtro === "TipoBox")
        {
           let searchStr = (item.nombre ).toLowerCase();
        return searchStr.indexOf(this.filter.toLowerCase()) != -1;
        }
        else if( this.filtro === "Persona")
        {
           let searchStr = (item.rut ).toLowerCase();
        return searchStr.indexOf(this.filter.toLowerCase()) != -1;

        }
        else if(this.filtro === "EC" )
        {
           let searchStr = (item.nombre ).toLowerCase();
           return searchStr.indexOf(this.filter.toLowerCase()) != -1;
        }else if(this.filtro === "Paciente" || this.filtro === "Medico")
        {
           let searchStr = (item.rut ).toLowerCase();
           return searchStr.indexOf(this.filter.toLowerCase()) != -1;
        }else if(this.filtro == "BoxConsulta"){
           let searchStr = (item.ubicacion).toLowerCase();
           return searchStr.indexOf(this.filter.toLowerCase()) != -1;
        }


      });
    });
  }

  disconnect() {}
}


/////////////////////////////////////////////////////////////////////////////////////




export class ExampleDataSource extends DataSource<any> {
  _filterChange = new BehaviorSubject('');
  get filter(): string { return this._filterChange.value; }
  set filter(filter: string) { this._filterChange.next(filter); }
  public filtro;
  filteredData: any[] = [];
  renderedData: any[] = [];

  constructor(
    private _exampleDatabase: ExampleDatabase,
    private _paginator: MatPaginator,
    private _sort: MatSort,
    filtro
    )
  {
    super();

    this.filtro = filtro;


    // Reset to the first page when the user changes the filter.
    this._filterChange.subscribe(() => this._paginator.pageIndex = 0);
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<any[]> {
    // Listen for any changes in the base data, sorting, filtering, or pagination
    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._sort.sortChange,
      this._filterChange,
      this._paginator.page,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      // Filter data
      this.filteredData = this._exampleDatabase.data.slice().filter((item: any) => {


        if(this.filtro === "Usuario")
        {
           let searchStr = (item.email ).toLowerCase();
           return searchStr.indexOf(this.filter.toLowerCase()) != -1;
        }
        else if( this.filtro === "Role")
        {
           let searchStr = (item.nombre ).toLowerCase();
           return searchStr.indexOf(this.filter.toLowerCase()) != -1;
        }
        else if( this.filtro === "EC" || this.filtro === "Region" || this.filtro === "Provincia" || this.filtro === "Comuna" || this.filtro === "Prevision" || this.filtro === "Genero" || this.filtro === "EstadoCita" || this.filtro === "Especialidad" || this.filtro === "TipoBox")
        {
           let searchStr = (item.nombre ).toLowerCase();
           return searchStr.indexOf(this.filter.toLowerCase()) != -1;
        }
        else if( this.filtro === "Persona")
        {
           let searchStr = (item.rut ).toLowerCase();
           return searchStr.indexOf(this.filter.toLowerCase()) != -1;

        }
        else if(this.filtro === "EC" )
        {
           let searchStr = (item.nombre ).toLowerCase();
           return searchStr.indexOf(this.filter.toLowerCase()) != -1;
        }
        else if(this.filtro === "Paciente" || this.filtro === "Medico")
        {

           let searchStr = (item.rut ).toLowerCase();
           return searchStr.indexOf(this.filter.toLowerCase()) != -1;

        }
        else if(this.filtro == "BoxConsulta")
        {

           let searchStr = (item.ubicacion).toLowerCase();
           return searchStr.indexOf(this.filter.toLowerCase()) != -1;
        }
        else if(this.filtro == "TS")
        {

           let searchStr = (item.nombre).toLowerCase();
           return searchStr.indexOf(this.filter.toLowerCase()) != -1;
        }




      });

      // Sort filtered data
      const sortedData = this.sortData(this.filteredData.slice());

      // Grab the page's slice of the filtered sorted data.
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      this.renderedData = sortedData.splice(startIndex, this._paginator.pageSize);
      return this.renderedData;
    });
  }

  disconnect() {}

  /** Returns a sorted copy of the database data. */
  sortData(data: any[]): any[]
  {
    if (!this._sort.active || this._sort.direction == '') { return data; }

    return data.sort((a, b) => {
      let propertyA: number|string = '';
      let propertyB: number|string = '';


        if(this.filtro === "Usuario")
        {
          switch (this._sort.active)
          {
            case 'Email': [propertyA, propertyB] = [a.email, b.email]; break;
            case 'Role': [propertyA, propertyB] = [a.Role_id, b.Role_id]; break;
          }
        }
        else if( this.filtro === "Role")
        {
          switch (this._sort.active)
          {
            case 'Nombre': [propertyA, propertyB] = [a.nombre, b.nombre]; break;
          }
        }
        else if( this.filtro === "EC")
        {

        }
        else if( this.filtro === "Persona")
        {
          switch (this._sort.active)
          {
            case 'Rut': [propertyA, propertyB] = [a.rut, b.rut]; break;
            case 'Nombre': [propertyA, propertyB] = [a.apellido1, b.apellido1]; break;
            case 'Telefonos': [propertyA, propertyB] = [a.movil, b.movil]; break;
            case 'Sexo': [propertyA, propertyB] = [a.Genero_id, b.Genero_id]; break;
            case 'Comuna': [propertyA, propertyB] = [a.Comuna_id, b.Comuna_id]; break;
            case 'Estado Civil': [propertyA, propertyB] = [a.EstadoCivil_id, b.EstadoCivil_id]; break;
          }
        }
        else if(this.filtro === "EC" )
        {
          switch (this._sort.active)
          {
            case 'Nombre': [propertyA, propertyB] = [a.nombre, b.nombre]; break;
            case 'Descripcion': [propertyA, propertyB] = [a.descripcion, b.descripcion]; break;
          }
        }
        else if(this.filtro === "Paciente")
        {
          switch (this._sort.active)
          {
            case 'Rut': [propertyA, propertyB] = [a.rut, b.rut]; break;
            case 'Tipo Sangre': [propertyA, propertyB] = [a.TipoSangre_id, b.TipoSangre_id]; break;
          }
        }
        else if(this.filtro == "BoxConsulta")
        {
          switch (this._sort.active)
          {
            case 'Ubicacion': [propertyA, propertyB] = [a.ubicacion, b.ubicacion]; break;
            case 'TipoBox': [propertyA, propertyB] = [a.TipoBox_id, b.TipoBox_id]; break;
          }
        }
        else if(this.filtro === "Region")
        {
          switch (this._sort.active)
          {
            case 'Nombre': [propertyA, propertyB] = [a.nombre, b.nombre]; break;
          }
        }
        else if(this.filtro === "Provincia")
        {
          switch (this._sort.active)
          {
            case 'Nombre': [propertyA, propertyB] = [a.nombre, b.nombre]; break;
            case 'Region': [propertyA, propertyB] = [a.Region_id, b.Region_id]; break;
          }
        }
        else if(this.filtro === "Comuna")
        {
          switch (this._sort.active)
          {
            case 'Nombre': [propertyA, propertyB] = [a.nombre, b.nombre]; break;
            case 'Provincia': [propertyA, propertyB] = [a.Provincia_id, b.Provincia_id]; break;
          }
        }
        else if(this.filtro === "Prevision")
        {
          switch (this._sort.active)
          {
            case 'Nombre': [propertyA, propertyB] = [a.nombre, b.nombre]; break;
            case 'Descripcion': [propertyA, propertyB] = [a.descripcion, b.descripcion]; break;
          }
        }
        else if(this.filtro === "Genero" )
        {
          switch (this._sort.active)
          {
            case 'Nombre': [propertyA, propertyB] = [a.nombre, b.nombre]; break;
            case 'Descripcion': [propertyA, propertyB] = [a.descripcion, b.descripcion]; break;
            case 'Isapre': [propertyA, propertyB] = [a.isapre, b.isapre]; break;
          }
        }
        else if(this.filtro === "EstadoCita" )
        {
          switch (this._sort.active)
          {
            case 'Nombre': [propertyA, propertyB] = [a.nombre, b.nombre]; break;
            case 'Descripcion': [propertyA, propertyB] = [a.descripcion, b.descripcion]; break;
          }
        }
        else if(this.filtro === "Especialidad" )
        {
          switch (this._sort.active)
          {
            case 'Nombre': [propertyA, propertyB] = [a.nombre, b.nombre]; break;
          }
        }
        else if(this.filtro === "Medico" )
        {
          switch (this._sort.active)
          {
            case 'Rut': [propertyA, propertyB] = [a.rut, b.rut]; break;
            case 'Especialidad': [propertyA, propertyB] = [a.Especialidad_id, b.Especialidad_id]; break;
          }
        }
        else if(this.filtro === "TS" )
        {
          switch (this._sort.active)
          {
            case 'Nombre': [propertyA, propertyB] = [a.nombre, b.nombre]; break;
            case 'Descripcion': [propertyA, propertyB] = [a.descripcion, b.descripcion]; break;
          }
        }






      let valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      let valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this._sort.direction == 'asc' ? 1 : -1);
    });
  }
}
