import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import * as L from 'leaflet'
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule, IonicModule ]
})
export class HomePage implements AfterViewInit{
  private map!: L.Map;
  private marker!: L.Marker; 

  constructor() { }

  ngAfterViewInit(): void {
    this.loadMap();
  }

  async loadMap () {
    // Obtener la ubicacion del usuario
    const position = await Geolocation.getCurrentPosition();
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    // const lat = 21.841905; // Coordenadas de la ciudad de Aguascalientes
    // const lon = -102.353480; // Coordenadas de la ciudad de Aguascalientes

    // Crear un mapa en la posicion del usuario
    this.map = L.map('map').setView([lat, lon], 13);

    // Crear un mapa con OpenStreetMap
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

    // Crear un marcador en la posicion del usuario
    this.marker = L.marker([lat, lon]).addTo(this.map).bindPopup('Tu ubicación actual').openPopup();

    // Actualizar la posicion del marcador
    this.trackPosition();
  }

  async trackPosition () {
    await Geolocation.watchPosition({ enableHighAccuracy: true }, (position, err) => {
      if (position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        // Actualizar la posicion del marcador
        this.marker.setLatLng([lat, lon]);
        this.map.setView([lat, lon], 15);
      }
    });
  }
}
