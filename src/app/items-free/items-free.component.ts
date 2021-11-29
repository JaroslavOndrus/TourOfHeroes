import { Component, OnInit } from '@angular/core';
import { ITEMS } from '../mock-items';
import { ItemService } from '../item.service';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import { Item } from '../item';

@Component({
  selector: 'app-items-free',
  templateUrl: './items-free.component.html',
  styleUrls: ['./items-free.component.css']
})
export class ItemsFreeComponent implements OnInit {

  itemsFree = ITEMS;
  hero: Hero;

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService
  ) { }

  ngOnInit(): void {
    this.getItems();
    this.getHero();
  }

  getItems(): void {
    this.itemService.getItems()
        .subscribe(items => this.itemsFree = items);
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.heroService.getHero(id)
        .subscribe(hero => this.hero = hero);
  }

  buyFreeItems(item: Item): void {
    if(this.hero.money >= item.price){
      this.hero.money -= item.price;
      item.isAvailable = false;
      this.hero.items.push(item);
    }
  }

  goBack(): void {
    this.location.back();
  }
}
