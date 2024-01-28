import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { inject } from '@angular/core/testing';
import { DbzServices } from '../../services/dbz.services';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

constructor(private dbzServices:DbzServices){}


  get characterList():Character[]{
    return this.dbzServices.characterList;
  }

  OnDeleteCharacter(id:string):void{
    this.dbzServices.DeleteCharacter(id);
  }

  onAddCharacter(character:Character):void{
    this.dbzServices.AddCharacterToList(character);
  }



}
