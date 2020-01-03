import { TamanioService, Tamanio } from './../services/tamanio.service';
import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import {PanoViewer} from "@egjs/view360";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements AfterViewInit, OnInit {
 
  @ViewChild('myPanoViewer', {static: false}) mapElement: ElementRef;
  public tamanio: Tamanio;
  public estilo: any;
  constructor(
    private tamanioService: TamanioService
  ) {
    this.tamanio = this.tamanioService.getTamanio();
    console.log(this.tamanio)
    this.estilo = {
      'width' : this.tamanio.ancho + 'px',
      'height' : (this.tamanio.alto/2) + 'px'
    };
    // create PanoViewer with option
    /*let domElement = this.mapElement.nativeElement as HTMLElement;
    const panoViewer = new PanoViewer(
      domElement,
      {
        image: "../../assets/img/pano_2048.jpg"
      }
    );*/
  }
  ngOnInit(): void {
    
  }
  ngAfterViewInit() {
    console.log('Values on ngAfterViewInit():');
    console.log("title:", this.mapElement.nativeElement);
    let domElement = this.mapElement.nativeElement as HTMLElement;
    const panoViewer = new PanoViewer(
      domElement,
      {
        image: '../../assets/img/prueba.jpg',
        projectionType: 'equirectangular'
      }
    );
  }
}
