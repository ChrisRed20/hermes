import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonIcon, IonLabel, IonNote, IonContent, IonListHeader, IonMenu, IonList, IonMenuToggle, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { home, bus, receipt, create, build, card } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [ IonRouterOutlet, IonList, IonListHeader, IonContent, IonMenu, IonMenuToggle, IonNote, IonLabel, IonIcon, RouterLink, RouterLinkActive, IonApp],
})
export class AppComponent {
  nameApp = 'Hermes';
  user = 'movilidad@gob.ags.mx';
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Incidencias', url: '/incidencias', icon: 'receipt' },
    { title: 'Configuracion', url: '/configuracion', icon: 'build' },
    { title: 'Mi Tarjeta', url: '/account', icon: 'card'}
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {
    addIcons({ home, bus, receipt, create, build, card  });
  }
}
