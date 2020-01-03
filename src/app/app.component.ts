import { TamanioService, Tamanio } from './services/tamanio.service';
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private tamanioService: TamanioService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      let tamanio: Tamanio = {
        ancho: this.platform.width(),
        alto: this.platform.height()
      };
      this.tamanioService.setTamanio(tamanio);
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
