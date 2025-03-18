
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { home, bus, receipt, create, build } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [RouterLink, RouterLinkActive, IonicModule,],
})
export class AppComponent {
  nameApp = 'Hermes';
  user = 'movilidad@gob.ags.mx';
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Registro', url: '/registro', icon: 'create' },
    { title: 'Transporte', url: '/transporte', icon: 'bus' },
    { title: 'Incidencias', url: '/incidencias', icon: 'receipt' },
    { title: 'Configuracion', url: '/configuracion', icon: 'build' }
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {
    addIcons({ home, bus, receipt, create, build  });
  }
}
