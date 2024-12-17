import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeComponent } from './liste/liste.component';
import {Film1Component} from "./liste/film1/film1.component";
import {Film2Component} from "./liste/film2/film2.component";
import {Film3Component} from "./liste/film3/film3.component";
import {Film4Component} from "./liste/film4/film4.component";
import {Film5Component} from "./liste/film5/film5.component";
import { ContactComponent } from './contact/contact.component';
import { GestionComponent } from './gestion/gestion.component';
import {NoFilmComponent} from "./liste/no-film/no-film.component";

export const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'liste', component: ListeComponent,
    children: [
      { path: '', component: NoFilmComponent },
      { path: 'film1', component: Film1Component },
      { path: 'film2', component: Film2Component },
      { path: 'film3', component: Film3Component },
      { path: 'film4', component: Film4Component },
      { path: 'film5', component: Film5Component },
      { path: '**', redirectTo: '' },
    ],
  },
  { path: 'contact', component: ContactComponent },
  { path: 'gestion', component: GestionComponent },
  { path: '**', redirectTo: '' }
];

