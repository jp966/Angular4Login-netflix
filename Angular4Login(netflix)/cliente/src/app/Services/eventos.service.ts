import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class EventosService {

public isSignIn:any;
public isSignOut:any;

  constructor() { 

  	this.isSignIn=new EventEmitter();
  	this.isSignOut=new EventEmitter();
  }

//funciones que emitiran eventos
  public SignIn(){
  	this.isSignIn.emit();
  }

  public SignOut(){
  	this.isSignOut.emit();
  }

}
