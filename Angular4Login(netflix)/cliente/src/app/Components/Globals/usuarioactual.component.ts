
/*
import { Component, OnInit } from '@angular/core';


import { Usuario } from '../../Models/Usuario.model';
import { UserService } from '../../Services/user/user.service';

import { Role } from '../../Models/Role.model';
import { RoleService } from '../../Services/role/role.service';

import { PermisoModulo } from '../../Models/PermisoModulo.model';
import { PermisoModuloService } from '../../Services/permisomodulo/permisomodulo.service';

import { Modulo } from '../../Models/Modulo.model';
import { ModuloService } from '../../Services/modulo/modulo.service';

export class UsuarioActual implements OnInit {
   //permisos
   public permisos:any[];
   public totalUsuarios:Usuario[];
   public current:any;

  constructor() {
     this.permisos=JSON.parse(localStorage.getItem('permisos')); 

   }

  ngOnInit() {
  }

 obtenerExistenciaPermiso(nombreModulo):boolean{
    for(let i=0;i<this.permisos.length;i++){
      if(this.permisos[i].Modulo_id===nombreModulo && this.permisos[i].view==1){
        return true;
      }
    }
  
    
  }


  obtenerPermisoWrite(nombreModulo):boolean{
    for(let i=0;i<this.permisos.length;i++){
      if(this.permisos[i].Modulo_id===nombreModulo && this.permisos[i].write==1){
        return true;
      }
    }
  
    
  }

  obtenerPermisoErase(nombreModulo):boolean{
    for(let i=0;i<this.permisos.length;i++){
      if(this.permisos[i].Modulo_id===nombreModulo && this.permisos[i].erase==1){
        return true;
      }
    }
  
    
  }


  obtenerPermisoUpdate(nombreModulo):boolean{
    for(let i=0;i<this.permisos.length;i++){
      if(this.permisos[i].Modulo_id===nombreModulo && this.permisos[i].update==1){
        return true;
      }
    }
  
    
  }


}
*/