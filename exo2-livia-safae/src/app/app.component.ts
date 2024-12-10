import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router'; // Nécessaire pour RouterModule et les routes
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {ListeComponent} from "./liste/liste.component";

import { appRoutes } from './app.routes'; // Import des routes (si ton fichier de routes s'appelle app.routes.ts)


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, HeaderComponent, FooterComponent, ListeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'exo2-livia-safae';
}
