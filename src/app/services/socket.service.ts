import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from "socket.io-client";

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  // private socket = io('http://localhost:3000');

  // constructor() { }

  // enviarUbicacion(data: any) {
  //   this.socket.emit('ubicacion-conductor', data);
  // }

  // escucharUbicacion(): Observable<any> {
  //   return new Observable(observer => {
  //     this.socket.on('ubicacion-actualizada', (data) => {
  //       observer.next(data);
  //     });
  //   });
  // }
}
