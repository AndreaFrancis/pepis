import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BrandPage } from './brand/brand';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openBrand() {
    this.navCtrl.push(BrandPage);    
  }

}
