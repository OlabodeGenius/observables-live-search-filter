import { TestBed } from '@angular/core/testing';
import { CharacterListComponent } from './character-list.component'; // Import standalone component

describe('CharacterListComponent', () => {
  let component: CharacterListComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CharacterListComponent],  // Add standalone component here
    });

    const fixture = TestBed.createComponent(CharacterListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
