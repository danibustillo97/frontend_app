import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { environment } from '../environment/environment';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'frontend_app';
  username: string = '';
  password: string = '';
  onSubmit() {
    // Tu lógica de autenticación aquí
    console.log(`Intento de inicio de sesión - Usuario: ${this.username}, Contraseña: ${this.password}`);
  }
}
