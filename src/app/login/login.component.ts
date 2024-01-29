import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule]
})



export class LoginComponent {
  username: string = '';
  password: string = '';

  onSubmit() {
    // Tu lógica de autenticación aquí
    console.log(`Intento de inicio de sesión - Usuario: ${this.username}, Contraseña: ${this.password}`);
  }
}
