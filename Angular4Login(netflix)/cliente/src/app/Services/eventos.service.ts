import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class EventosService {

public isSignIn:any;
public isSignOut:any;
public isSignUp:any;

  constructor() { 

  	this.isSignIn=new EventEmitter();
  	this.isSignOut=new EventEmitter();
    this.isSignUp=new EventEmitter();
  }

//funciones que emitiran eventos
  public SignIn(){
  	this.isSignIn.emit();
  }

  public SignOut(){
  	this.isSignOut.emit();
  }

  public singUp(nuevoUsuario){
      this.isSignUp.emit(nuevoUsuario);
  }

}
