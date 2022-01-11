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
      { id: 1, name: 'Dr Nice', money: 2000, life: 10, strenght: 150},
      { id: 2, name: 'Narco', money: 2500, life: 50, strenght: 20},
      { id: 3, name: 'Bombasto', money: 22500, life: 25, strenght: 80},
      { id: 4, name: 'Celeritas', money: 58650, life: 8, strenght: 100},
      { id: 5, name: 'Magneta', money: 6000, life: 1, strenght: 300},
      { id: 6, name: 'RubberMan', money: 2950, life: 15, strenght: 100},
      { id: 7, name: 'Dynama', money: 6500, life: 1000, strenght: 5},
      { id: 8, name: 'Dr IQ', money: 2200, life: 580, strenght: 12},
      { id: 9, name: 'Magma', money: 1230, life: 6, strenght: 65},
      { id: 10, name: 'Tornado', money: 9870, life: 18, strenght: 35}
    ];

    const items = [
      { id: 11, name: 'Iron Hammer', price: 150, isAvailable: true}, 
      { id: 12, name: 'Pistol', price: 250, isAvailable: true},
      { id: 13, name: 'Stick', price: 120, isAvailable: true},
      { id: 14, name: 'Steel Knife', price: 400, isAvailable: true},
      { id: 15, name: 'Scytche', price: 750, isAvailable: true},
      { id: 16, name: 'Cutlass', price: 120, isAvailable: true},
      { id: 17, name: 'Machine Gun', price: 200, isAvailable: true},
      { id: 18, name: "Stone", price: 50, isAvailable: true},
      { id: 19, name: 'Wrench', price: 900, isAvailable: true},
      { id: 20, name: 'Axe', price: 1000, isAvailable: true},
    ]

    return { heroes, items };
  }

  genId(heroes: Hero[], items: Item[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11 && items.length > 0 ? Math.max(...items.map(item => item.id)) +1 : 11;
  }
}