import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TamanioService {
  private tamanio: Tamanio;
  constructor() { }
  public getTamanio(){
    return this.tamanio;
  }
  public setTamanio(tamanio: Tamanio) {
    this.tamanio = tamanio;
  }
}

export interface Tamanio {
  ancho: any;
  alto: any;
}
