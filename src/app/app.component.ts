import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OlaMundo } from './components/ola-mundo/ola-mundo';
import { CommonModule } from '@angular/common';
import { Perfil } from './components/perfil/perfil';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, OlaMundo, Perfil],
  template: `
    <app-ola-mundo></app-ola-mundo>
    <router-outlet></router-outlet>
    <app-perfil></app-perfil>
  `,
  styles: []
})
export class AppComponent {
  title = 'aulaSextaLab1';
}
