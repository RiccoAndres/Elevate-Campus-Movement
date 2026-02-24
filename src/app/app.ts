import { Component, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Header } from './components/header/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ecm-web');

  constructor() {
  }
}
