import { Component, signal } from '@angular/core';
import { CharacterListComponent } from './character-list/character-list.component';

@Component({
  selector: 'app-root',
  imports: [CharacterListComponent],
  templateUrl: './app/app.html',
  styleUrl: './app/app.css'
})
export class App {
  protected readonly title = signal('api-integration');
}
