import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public toastCtrl: ToastController,public navCtrl: NavController) {

  }

  playAction(lettre:string){ 
    let toast = this.toastCtrl.create({
      message: 'User was added successfully='+lettre,
      duration: 3000
    });
    toast.present();
  }

}
