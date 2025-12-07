import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from "@angular/forms";
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
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
