import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Sanduiches, Pizzas, Bebidas } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-concluir-pedido',
  templateUrl: 'concluir-pedido.html',
})
export class ConcluirPedidoPage {

  pedidoConcluido = {};

  pizza: any = {id: null, name: null};
  sanduiche: any = {id: null, name: null};
  bebida: any = {id: null, name: null};

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams, 
  	private bebidas: Bebidas,
  	private pizzas: Pizzas,
  	private sanduiches: Sanduiches) {
  	
  	let bebida = this.bebidas.query({id: navParams.data.pedido.bebida})[0];
  	let sanduiche = this.sanduiches.query({id: navParams.data.pedido.sanduiche})[0];
  	let pizza = this.pizzas.query({id: navParams.data.pedido.pizza})[0];

  	if  (bebida) {
  		this.bebida = bebida;
  	}
  	if (sanduiche) {
  		this.sanduiche = sanduiche;
  	}
  	if (pizza) {
  		this.pizza = pizza;
  	}
  }

  ionViewDidLoad() {
  	console.info(this.pizza);
  }

}
