import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ClientPage } from './client/client';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
 items = [
    'Pokémon Yellow',
    'Super Metroid',
    'Mega Man X',
    'The Legend of Zelda',
    'Pac-Man',
    'Super Mario World',
    'Street Fighter II',
    'Half Life',
    'Final Fantasy VII',
    'Star Fox',
    'Tetris',
    'Donkey Kong III',
    'GoldenEye 007',
    'Doom',
    'Fallout',
    'GTA',
    'Halo'
  ];


  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  
  itemSelected(item: string) {
    this.navCtrl.push(ClientPage);    
  }
}
