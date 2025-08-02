import { Component, signal } from '@angular/core';
import { OlaMundo } from "./components/ola-mundo/ola-mundo";
import { Perfil } from "./components/perfil/perfil";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, OlaMundo, Perfil],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('aulaSextaLab1');
}
