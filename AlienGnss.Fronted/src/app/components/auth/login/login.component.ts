import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { AlertService } from '../../../services/alert.service';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private _alertService = inject(AlertService);

  loginForm = this.fb.group({
    usuario: ['', Validators.required],
    password: ['', Validators.required]
  })

  iniciarSesion() {
    const { usuario, password } = this.loginForm.value;
    this._alertService.success('Bienvenido al sistema')
  }


}
