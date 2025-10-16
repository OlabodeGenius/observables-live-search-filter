import { Component } from '@angular/core';
import { CharacterListComponent } from '../character-list/character-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-app',
  standalone: true,
  imports: [CommonModule, CharacterListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
