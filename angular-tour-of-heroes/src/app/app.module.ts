import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';


// no need to place any providers due to the providedIn flag..
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
