import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../Services/authentication.service';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(public authService:AuthenticationService){

  }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  		if(localStorage.getItem('currentUser')){
  			//si esta logeado no podrá ir a la ruta de login
  			return false;
  		}else{
  			return true;
  		}


  }
}
