import { Component } from '@angular/core';
import { FormHero, Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})

export class HeroFormComponent {

  constructor(
    private heroService: HeroService) { }

  heroes: FormHero[] = [];
  hero: Hero[]=[];

  id!: number;
  name!: string;
  money!: number;
  life!: number;
  strenght!: number;

  model = new FormHero(this.id, this.name, this.money, this.life, this.strenght);

  submitted = false;

  onSubmit() { 
    this.submitted = true;
    
    
  }

  addHero() {
    this.heroService.addHero(this.model as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
    })

    console.log(this.model);
  }
}