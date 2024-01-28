import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-agregar-personaje',
  templateUrl: './agregar-personaje.component.html',
  styleUrl: './agregar-personaje.component.css'
})
export class AgregarPersonajeComponent {


  @Output()
  onNewCharacter:EventEmitter<Character> = new EventEmitter()



 public character :Character = {name:"",power:0}


 EmitCharacter():void{

   if(this.character.name.trim().length===0){return}
   if(this.character.power==null){return}

  this.onNewCharacter.emit({...this.character});

  this.ResetForm();
 }

 ResetForm():void{
 this.character = {name:'',power:0}
 }

}
