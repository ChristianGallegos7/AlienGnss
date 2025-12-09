import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private fb = inject(FormBuilder);

  loginForm = this.fb.group({
    usuario: ['', Validators.required],
    password: ['', Validators.required]
  })

  iniciarSesion() {
    const { usuario, password } = this.loginForm.value;
    console.log({ usuario, password });
  }

}
