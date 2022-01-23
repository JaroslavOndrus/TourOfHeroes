import { Component } from '@angular/core';
import { FormHero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  model = new FormHero(18, 'Dr IQ', "250", "10", "50");

  heroes: FormHero[] = [];

  submitted = false;

  onSubmit() { this.submitted = true; }

  newHero(){
    this.model = new FormHero(42, '', '', '', '');
  }
}