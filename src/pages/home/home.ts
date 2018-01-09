import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { SoundsService } from '../../services/sounds.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  currentSound:any;

  constructor(public toastCtrl: ToastController,public navCtrl: NavController, public soundsService:SoundsService ) {
    this.currentSound=soundsService.getSound('a');
  }

  playAction(lettre:string){ 
    let toast = this.toastCtrl.create({
      message: 'User was added successfully='+lettre,
      duration: 3000
    });
    this.currentSound=this.soundsService.getSound(lettre);
    toast.present();
    var audio = new Audio('./assets/sound/battery.wav');
    audio.play();
  }

}
