import { Component } from '@angular/core';

@Component({
  selector: 'app-root',   //custom html tag to represents this Component, this comes from "index.html"
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes!';
}
