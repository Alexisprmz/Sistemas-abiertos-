import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { CharacterListComponent } from '../character-list/character-list.component';
import { CharacterAddComponent } from '../character-add/character-add.component';
import { Character } from '../interface/character.model';
import { LocalStorageService } from '../services/local-storage.service';
import { WritableSignal } from '@angular/core';

@Component({
  selector: 'app-dragonball-page',
  standalone: true,
  imports: [CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragonball-page.component.html',
  styleUrls: ['./dragonball-page.component.scss']
})
export class DragonballPageComponent {

  name!: WritableSignal<string>;
  power!: WritableSignal<number>;
  characters!: WritableSignal<Character[]>;

  constructor(private localStorage: LocalStorageService) {
    this.name = this.localStorage.linkedSignal<string>('charName', '');
    this.power = this.localStorage.linkedSignal<number>('charPower', 0);

    this.characters = this.localStorage.linkedSignal<Character[]>('characters', [
      { id: 1, name: 'Goku', power: 9001 },
      { id: 2, name: 'Vegeta', power: 8001 },
      { id: 3, name: 'Krillin', power: 1001 },
      { id: 4, name: 'Yamcha', power: 500 }
    ]);
  }

  addCharacter(character: { name: string; power: number }) {
    const newId = this.characters().length
      ? Math.max(...this.characters().map(c => c.id)) + 1
      : 1;

    const newCharacter: Character = {
      id: newId,
      name: character.name,
      power: character.power
    };

    this.characters.update(chars => [...chars, newCharacter]);
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}