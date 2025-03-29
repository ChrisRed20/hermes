import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonIcon, IonButton, IonButtons, IonMenuButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
  standalone: true,
  imports: [IonButtons, IonButton, IonIcon, IonCardContent, IonCardTitle, IonCardSubtitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, IonMenuButton, CommonModule, FormsModule]
})
export class AccountPage implements OnInit {
  saldo: number = 0;
  uid: string = '';

  constructor() { }

  ngOnInit() {
  }

  // escucharTarjeta() {
  //   this.nfc.addNdefListener(() => {
  //     console.log('Esperando tarjeta NFC...');
  //   }, (err: any) => {
  //     console.error('Error al iniciar NFC:', err);
  //   }).subscribe(event => {
  //     const tag = event.tag;
  //     console.log('Tag detectado:', tag);

  //     this.uid = this.nfc.bytesToHexString(tag.id); // UID

  //     if (tag.ndefMessage) {
  //       const payload = tag.ndefMessage[0].payload;
  //       const texto = this.nfc.bytesToString(payload).substring(3); // remover formato
  //       console.log('Texto leído:', texto);

  //       const valor = parseFloat(texto.replace(/[^\d.]/g, ''));
  //       this.saldo = valor;
  //     } else {
  //       console.warn('No se detectó mensaje NDEF.');
  //     }
  //   });
  // }

  simularLectura() {
    this.saldo = Math.floor(Math.random() * 100);
  }

}
