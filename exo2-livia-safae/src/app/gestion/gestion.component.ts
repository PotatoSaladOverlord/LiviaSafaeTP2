import { Component, OnInit } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss'],
  imports: [
    NgIf
  ],
  standalone: true
})
export class GestionComponent implements OnInit {
  lastContactForm: any;

  public ngOnInit(): void {
    const storedForm = localStorage.getItem('lastContactForm');
    this.lastContactForm = storedForm ? JSON.parse(storedForm) : null;
  }
}
