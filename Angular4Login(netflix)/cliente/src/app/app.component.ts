import { Component } from '@angular/core';
//import { Role } from './Models/Role.model';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import {toolbarComponent} from './Components/toolbar/toolbar.component';
//import { EventosService } from './Services/eventos/eventos.service'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	constructor(){
    }

}
