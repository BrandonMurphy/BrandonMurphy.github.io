import { Component } from '@angular/core';
import Pokemon from '../assets/pokemon.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'og-pokemon';
  pokemonList = Pokemon;
}
