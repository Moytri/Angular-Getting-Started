import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

//Always need to import the Component symbol from the core angular library
//@Component is the decorator function
//This decorator function specifies Angular metadata for the Component
//CLI decorator has three metadata properties - selector, templateUrl, styleUrls
@Component({
  selector: 'app-heroes',       //Component's CSS element selector
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
 
  selectedHero: Hero;

  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}
