import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component";
import { AppRoutingModule } from "./app-routing.module";

export const firebaseConfig = {
  apiKey: "AIzaSyBtUECD0VETG6a2LVEcqNK6kF_mlFS5Z6A",
  authDomain: "smart-sae.firebaseapp.com",
  databaseURL: "https://smart-sae.firebaseio.com",
  projectId: "smart-sae",
  storageBucket: "",
  messagingSenderId: "19487452440"
};

@NgModule({
  declarations: [
    AppComponent, HomeComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule, AngularFireModule.initializeApp(firebaseConfig,'app-root'),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
