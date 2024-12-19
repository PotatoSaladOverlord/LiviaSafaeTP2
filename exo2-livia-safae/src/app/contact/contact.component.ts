import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    age: null,
    comment: ''
  };
  hideEmail = false; // Contrôle si le champ e-mail est masqué
}
