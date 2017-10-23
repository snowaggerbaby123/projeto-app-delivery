import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ConcluirPedidoPage } from '../concluir-pedido/concluir-pedido';

import { Sanduiches, Pizzas, Bebidas } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-pedido',
  templateUrl: 'pedido.html',
})
export class PedidoPage {

  public pedido: any = {}

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams, 
  	private bebidas: Bebidas,
  	private pizzas: Pizzas,
  	private sanduiche: Sanduiches) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedidoPage', this.pizzas);
  }

  gotoConcluirPedido() {
  	this.navCtrl.push(ConcluirPedidoPage, { pedido: this.pedido });
  }

}
 

