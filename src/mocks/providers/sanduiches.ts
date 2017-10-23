import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Sanduiches {
  items: Item[] = [];

  constructor() {
    let items = [
      {
        id: 1,
        "name": "Atum",
        "valor": 8,
        // "profilePic": "assets/img/speakers/bear.jpg",
        "about": "Atum."
      },
      {
        id: 2,
        "name": "Carne",
        // "profilePic": "assets/img/speakers/cheetah.jpg",
        "about": "Carne, queijo e vegetais."
      },  
      {
        id: 3,
        "name": "Calabreza",
        // "profilePic": "assets/img/speakers/duck.jpg",
        "about": "Calabreza e vegetais."
      },
      {
        id: 4,
        "name": "Frango",
        // "profilePic": "assets/img/speakers/eagle.jpg",
        "about": "Frango, queijo e vegetais."
      },
      {
        id: 5,
        "name": "Misto",
        // "profilePic": "assets/img/speakers/elephant.jpg",
        "about": "Carne, frango, queijo e vegetais."
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
