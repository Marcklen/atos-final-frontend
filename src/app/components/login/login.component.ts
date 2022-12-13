import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr/public_api';
import { Login } from 'src/app/models/login';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = {
    email: '',
    senha: ''
  }

  email = new FormControl(null, Validators.email);
  senha = new FormControl(null, Validators.minLength(3));

  constructor(
    private toast: ToastrService,
    private service: AuthService,
    ) { }

  ngOnInit(): void { }

  logar() {
    //this.toast.error('Usuário e/ou Senha inválidos!' , 'Login');
    this.login.senha = '';
  }

  validarCampos(): boolean {

    if (this.email.valid && this.senha.valid) {
      return true;
    } else {
      return false;
    }
  }
}
