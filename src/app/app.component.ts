import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'ingresa tu cuenta', url: 'home', icon: 'heart' },
    { title: 'contenido', url: 'contenido', icon: 'paper-plane' },
    { title: 'contacto', url: 'contacto', icon: 'heart' },
    
 
  ];
  constructor() {}
}
