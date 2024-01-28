import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-show-list',
  templateUrl: './show-list.component.html',
  styleUrl: './show-list.component.css'
})
export class ShowListComponent {

@Input() list:Character[]=[]

@Output() DeletCharacter:EventEmitter<string> = new EventEmitter()


public OnDeleteCharacter(id?:string):void{
  if( !id ) return;
  this.DeletCharacter.emit(id)
}


}
