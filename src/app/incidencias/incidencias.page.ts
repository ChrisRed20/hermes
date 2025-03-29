import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonTitle, IonToolbar, IonItem, IonCard, IonCardTitle, IonCardContent, IonCardHeader, IonCardSubtitle, IonLabel, IonSelectOption, IonCheckbox, IonTextarea, IonDatetime, IonSelect, IonButton, ToastController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-incidencias',
  templateUrl: './incidencias.page.html',
  styleUrls: ['./incidencias.page.scss'],
  standalone: true,
  imports: [IonButton, IonLabel, IonCardSubtitle, IonCardHeader, IonCardContent, IonCardTitle, IonCard, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule, IonSelect, IonCheckbox, IonTextarea, IonDatetime, IonMenuButton, IonButtons, IonSelectOption]
})
export class IncidenciasPage implements OnInit {

  incidencia = {
    tipo: '',
    descripcion: '',
    fecha: new Date().toISOString(),
    anonimo: false,
  };
  constructor(private toast: ToastController) { }

  ngOnInit() {
  }

  async registrarIncidencia() {
    console.log('Incidencia enviada:', this.incidencia);

    // Logica para enviar incidencia al backend

    const toast = await this.toast.create({
      message: 'Incidencia enviada con exito',
      duration: 2000,
      color: 'success'
    });

    toast.present();

    // Reinciar formulario
    this.incidencia = {
      tipo: '',
      descripcion: '',
      fecha: new Date().toISOString(),
      anonimo: false,
    };

  }



}
