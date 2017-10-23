import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Pizzas {
  items: Item[] = [];

  constructor() {
    let items = [
      {
        "id": 1,
        "name": "Atum",
        // "profilePic": "assets/img/speakers/bear.jpg",
        "about": "Atum e vegetais."
      },
      {
        id: 2,
        "name": "Frango",
        // "profilePic": "assets/img/speakers/cheetah.jpg",
        "about": "Frango, catupiri e tomate."
      },
      {
        id: 3,
        "name": "Calabresa",
        // "profilePic": "assets/img/speakers/duck.jpg",
        "about": "Calabresa grelhada com cebola"
      },
      {
        id: 4,
        "name": "Moda da casa",
        // "profilePic": "assets/img/speakers/eagle.jpg",
        "about": "A Melhor pizza da regiao.",
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
