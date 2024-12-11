import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    age: null,
    comment: ''
  };
  showEmail = false;  // Pour contrôler l'affichage du champ email
}

