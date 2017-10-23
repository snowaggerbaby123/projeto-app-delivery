import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { PedidoPage } from '../pedido/pedido';

@IonicPage()
@Component({
  selector: 'page-content',
  templateUrl: 'content.html'
})
export class ContentPage {

  constructor(public navCtrl: NavController) { }

  gotoPedido() {
  	this.navCtrl.push(PedidoPage);
  }

}
