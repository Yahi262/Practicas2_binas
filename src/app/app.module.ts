import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppRoutingModule } from './app-routing.module';
//debes de borrar esto y en el imports
import { AppComponent } from './app.component';
import {SaludarComponent } from './componentes/saludar.component';
//el import de saludar viene de la clase que se va a usar
//aqui se usa esa clase que se hizo publica en el ts (export)

@NgModule({
  declarations: [
    //aqui se declaran los componentes 
    //que se van a usar para todo el proyecto
    AppComponent,
    SaludarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
