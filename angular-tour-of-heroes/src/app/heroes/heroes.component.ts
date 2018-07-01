import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

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
  heroes = HEROES;
  onSelect(hero: Hero) : void {
  		this.selectedHero = hero;
  }


  constructor() { }

  ngOnInit() {
  }

}
