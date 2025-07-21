import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-certificate-form',
  templateUrl: './certificate-form.component.html',
  styleUrls: ['./certificate-form.component.css']
})
export class CertificateFormComponent {
  certificateForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.certificateForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      course: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.certificateForm.valid) {
      console.log("Form Data:", this.certificateForm.value);
      // Тут будет вызов API позже
    } else {
      console.log("Form Invalid");
      this.certificateForm.markAllAsTouched(); // показать ошибки
    }
  }
}
