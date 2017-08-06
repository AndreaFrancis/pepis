import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ClientHistoryInputPage } from './input/input';
import { ClientHistoryOutputPage } from './output/output';

@Component({
  selector: 'page-client-history',
  templateUrl: 'history.html'
})
export class ClientHistoryPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  newSale() {
    let modal = this.modalCtrl.create(ClientHistoryInputPage);
    modal.present();
  }

  newPayment() {
    let modal = this.modalCtrl.create(ClientHistoryOutputPage);
    modal.present();
  }
}
