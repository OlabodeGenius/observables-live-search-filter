import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonService } from '../pokemon.service';
import { Subject, debounceTime, switchMap, takeUntil } from 'rxjs';

@Component({
  selector: 'app-character-list',
  standalone: true,
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
  imports: [CommonModule, FormsModule]
})
export class CharacterListComponent implements OnInit, OnDestroy {
  pokemonList: any[] = [];
  isLoading = false;
  searchTerm = '';
  private searchSubject = new Subject<string>();
  private destroy$ = new Subject<void>();

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.searchSubject
      .pipe(
        debounceTime(300),
        switchMap((term) => this.pokemonService.searchPokemon(term)),
        takeUntil(this.destroy$)
      )
      .subscribe(
        (data: any) => {
          if (data.results) {
            this.pokemonList = data.results.filter((pokemon: any) =>
              pokemon.name.toLowerCase().includes(this.searchTerm.toLowerCase())
            );
          } else {
            this.pokemonList = [];
          }
          this.isLoading = false;
        },
        (error: any) => {
          console.error('Error fetching Pokémon data', error);
          this.isLoading = false;
        }
      );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSearchChange(): void {
    this.isLoading = true;
    this.searchSubject.next(this.searchTerm);
  }

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
