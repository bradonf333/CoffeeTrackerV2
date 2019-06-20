import { NgModule } from '@angular/core';
/* Firestore Imports */
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/* Angular */
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
// --------------------------------------------------------------
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoffeeCreateComponent } from './coffee-create/coffee-create.component';
import { CoffeeDetailsComponent } from './coffee-details/coffee-details.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CoffeeDetailsComponent,
    NavbarComponent,
    HomeComponent,
    CoffeeCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
