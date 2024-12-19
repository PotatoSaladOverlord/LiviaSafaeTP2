import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  standalone: true
})
export class ContactComponent {
  contactForm: FormGroup;
  emailHidden = false;

  public constructor(private fb: FormBuilder, private router: Router) {
    this.contactForm = this.fb.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      age: [''],
      email: ['', [Validators.required, Validators.email]],
      commentaire: ['', Validators.required],
    });
  }

  public toggleEmail(event: Event): void {
    this.emailHidden = (event.target as HTMLInputElement).checked;
    if (this.emailHidden) {
      this.contactForm.get('email')?.clearValidators();
    } else {
      this.contactForm.get('email')?.setValidators([Validators.required, Validators.email]);
    }
    this.contactForm.get('email')?.updateValueAndValidity();
  }

  public onSubmit(): void {
    if (this.contactForm.valid) {
      alert('Le formulaire est valide');
      localStorage.setItem('lastContactForm', JSON.stringify(this.contactForm.value));
      this.router.navigate(['/']);
    }
  }
}
