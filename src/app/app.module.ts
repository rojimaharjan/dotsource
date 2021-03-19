import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduktComponent } from './COMPONENTS/produkt/produkt.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { WarenkorbComponent } from './COMPONENTS/warenkorb/warenkorb.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduktComponent,
    WarenkorbComponent,
    HomeComponent,
    WarenkorbComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'produkt', component:HomeComponent},
      {path:'Warekorb', component: WarenkorbComponent},
    ]),
    BrowserAnimationsModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
