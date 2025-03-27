import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonTitle, IonToolbar, IonList, IonListHeader, IonItem, IonLabel, IonToggle, IonSelect, IonSelectOption, IonItemGroup, IonItemDivider, IonInput, IonButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
  standalone: true,
  imports: [IonIcon, IonItemDivider, IonItemGroup, IonToggle, IonLabel, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, IonSelect, IonSelectOption, CommonModule, FormsModule, IonMenuButton, IonButtons]
})
export class ConfiguracionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
