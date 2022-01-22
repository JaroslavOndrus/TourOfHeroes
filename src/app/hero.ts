import { Item } from "./item";

export interface Hero{
    id: number;
    name: string;
    items: Item[];
    money: number;
    life: number;
    strenght: number;
}

export class FormHero {

    constructor(
      public id: number,
      public name: string,
      public power: string,
      public alterEgo?: string
    ) {  }
  
  }