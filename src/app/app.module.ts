import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { TechComponent } from './tech/tech.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from "@angular/forms";
import { StatutConnecteService } from "./auth/statut-connecte.service";
import { AuthInterceptorService } from "./auth/auth-interceptor.service";
import { CollabReservationsComponent } from './collab-reservations/collab-reservations.component';
import { CollabAnnoncesComponent } from './collab-annonces/collab-annonces.component';
import { CollabStatistiquesComponent } from './collab-statistiques/collab-statistiques.component';
import { CollabTableHistoriqueComponent } from './collab-table-historique/collab-table-historique.component';
import { CollabMenuComponent } from './collab-menu/collab-menu.component';
import { CollabCreerComponent } from './collab-creer/collab-creer.component';

const routes: Routes = [
  { path: 'tech', component: TechComponent, canActivate: [StatutConnecteService] }, // /tech accessible uniquement si connecté
  { path: 'auth', component: AuthComponent },
  { path: 'collaborateur', component: CollabMenuComponent },
  { path: 'collaborateur/reservations', component: CollabReservationsComponent }, // créer pour test de liaison entre panneau
  { path: 'collaborateur/annonces', component: CollabAnnoncesComponent }, // créer pour test de liaison entre panneau
  { path: 'collaborateur/statistiques', component: CollabStatistiquesComponent }, // créer pour test de liaison entre panneau
  { path: 'collaborateur/propositions/creer', component: CollabCreerComponent }, // créer pour test de liaison entre panneau
  { path: '', redirectTo: '/tech', pathMatch: 'full' }

];


@NgModule({
  declarations: [
    AppComponent,
    TechComponent,
    AuthComponent,
    CollabMenuComponent,
    CollabReservationsComponent,
    CollabAnnoncesComponent,
    CollabStatistiquesComponent,
    CollabTableHistoriqueComponent,
    CollabCreerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    FormsModule

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
