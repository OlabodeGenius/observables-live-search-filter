import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Import AppComponent here
import { CharacterListComponent } from './character-list/character-list.component';

@NgModule({
  imports: [
    BrowserModule,
    AppComponent,  // Import AppComponent here
    CharacterListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
