import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ClientHistoryPage } from './history/history';


@Component({
  selector: 'page-client',
  templateUrl: 'client.html'
})
export class ClientPage {

  constructor(public navCtrl: NavController) {

  }

  showHistory() {
    this.navCtrl.push(ClientHistoryPage);    
  }
}
