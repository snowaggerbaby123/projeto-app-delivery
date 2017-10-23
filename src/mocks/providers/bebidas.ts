import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Bebidas {
  items: Item[] = [];

  constructor() {
    let items = [
      {
        "id": 1,
        "name": "Água de coco",
        "valor": 8,
        // "profilePic": "assets/img/speakers/bear.jpg",
        "about": "natural ou gelada"
      },
      {
        id: 2,
        "name": "Água mineral",
        // "profilePic": "assets/img/speakers/cheetah.jpg",
        "about": "natural ou gelada"
      },
      {
        id: 3,
        "name": "Coca cola",
        // "profilePic": "assets/img/speakers/duck.jpg",
        "about": "light"
      },
      {
        id: 4,
        "name": "Pepse",
        // "profilePic": "assets/img/speakers/eagle.jpg",
        "about": "gelada."
      },
      {
        id: 5,
        "name": "Fanta",
        // "profilePic": "assets/img/speakers/elephant.jpg",
        "about": "laraja."
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
