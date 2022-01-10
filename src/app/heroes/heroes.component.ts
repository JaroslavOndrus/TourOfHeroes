import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Items } from '../mock-items';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

  option: string = '';

  dropDown(event: any){
    this.option = event.target.value;

    if(this.option == "ID"){
      return this.heroes.sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0);
    }
    
    else if(this.option == "Name"){
      return this.heroes.sort((a, b) => a.name.localeCompare(b.name));
    }
    
    else if(this.option == "Money"){
      return this.heroes.sort((a, b) => a.money > b.money ? -1 : a.money < b.money ? 1 : 0);
    }
  }
}
