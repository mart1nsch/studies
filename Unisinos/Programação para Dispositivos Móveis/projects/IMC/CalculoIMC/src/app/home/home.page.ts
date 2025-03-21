import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false
})
export class HomePage {

  constructor(private alertController: AlertController) {}

  products = [
    {
      name: "Banana",
      price: 3.99
    },
    {
      name: "Leite",
      price: 4.59
    },
    {
      name: "Arroz",
      price: 10.99
    },
  ];

  async mostrarAlerta() {
    const alert = await this.alertController.create({
      header: "Alerta!",
      message: "Você clicou no botão!",
      buttons: ["OK"]
    });

    await alert.present();
  }

}
