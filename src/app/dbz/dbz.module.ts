import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



import { MainPageComponent } from './pages/main-page/main-page.component';
import { AgregarPersonajeComponent } from './components/agregar-personaje/agregar-personaje.component';
import { ShowListComponent } from './components/show-list/show-list.component';


@NgModule({
  exports: [MainPageComponent],
  declarations: [
    MainPageComponent,
    AgregarPersonajeComponent,
    ShowListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
})
export class DbzModule { }
