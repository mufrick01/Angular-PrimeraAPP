import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid'

@Injectable({providedIn: 'root'})
export class DbzServices {


  constructor() {


  }


  public characterList: Character[] =
    [
      { id:uuid(), name: 'Goku',    power: 10000 },
      { id:uuid(), name: 'Vegeta',  power: 7000 },
      { id:uuid(), name: 'Krillin', power: 1000 },
      { id:uuid(), name: 'Ten Shin Han', power: 2000 },
      { id:uuid(), name: 'Yamcha', power: 1500 },
    ]

  AddCharacterToList(character:Character):void{
    const newCharacter:Character = {id:uuid(), ... character}
    this.characterList.push(newCharacter);
  }

  DeleteCharacter(id:string):void{
    const filteredList = this.characterList.filter(c=>c.id !== id)
    this.characterList = filteredList;
    // this.characterList.splice(id,1);
  }

}
