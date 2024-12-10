import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeComponent } from './liste/liste.component';
import { ContactComponent } from './contact/contact.component';
import { GestionComponent } from './gestion/gestion.component';

export const appRoutes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'liste', component: ListeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'gestion', component: GestionComponent },
  { path: '**', redirectTo: '' }  // Rediriger vers la page d'accueil pour les routes inconnues
];

export const routes: Routes = [];
