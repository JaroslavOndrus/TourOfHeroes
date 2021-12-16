import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Item } from './item'; 

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];

    const items = [
      { id: 11, name: 'Iron Hammer', price: 150, isAvailable: true}, 
      { id: 12, name: 'Golden Axe', price: 250, isAvailable: true},
      { id: 13, name: 'Wooden Stick', price: 120, isAvailable: true},
      { id: 14, name: 'Knife', price: 400, isAvailable: true},
      { id: 15, name: 'Sword', price: 750, isAvailable: true},
      { id: 16, name: 'Butcher Knife', price: 120, isAvailable: true},
      { id: 17, name: 'Machette', price: 200, isAvailable: true},
      { id: 18, name: "Kameň", price: 50, isAvailable: true},
      { id: 19, name: 'Axe', price: 900, isAvailable: true},
      { id: 20, name: 'Hammer', price: 1000, isAvailable: true},
    ]

    return { heroes, items };
  }

  genId(heroes: Hero[], items: Item[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11 && items.length > 0 ? Math.max(...items.map(item => item.id)) +1 : 11;
  }
}