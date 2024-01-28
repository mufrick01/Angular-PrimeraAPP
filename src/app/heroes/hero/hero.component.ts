import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name:string = "ironman"
  public age:number = 45;
  get CapitalizedName(){
    return this.name.toUpperCase();
  }


  GetHeroDescription():string{
    return `${this.name} ${this.age}`
  }

  ChangeHeroName():void{

    this.name = 'spiderman'

  }
  ChangeHeroAge():void{
    this.age = 25
  }

  Reset():void{

    this.age = 45;
    this.name = 'ironman'
  }
}
