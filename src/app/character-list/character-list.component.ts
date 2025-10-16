import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-character-list',
  standalone: true,
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
  imports: [CommonModule]
})
export class CharacterListComponent implements OnInit {
  pokemonList: any[] = [];
  isLoading = false;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {}

  loadPokemon(): void {
    this.isLoading = true;
    this.pokemonService.getPokemonList().subscribe(
      (data: any) => { 
        this.pokemonList = data.results;
        this.isLoading = false;
      },
      (error: any) => { 
        console.error('Error fetching Pokémon data', error);
        this.isLoading = false;
      }
    );
  }
  
}
