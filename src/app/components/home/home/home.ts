import { Component } from '@angular/core';
import { Events } from '../events/events';

@Component({
  selector: 'app-home',
  imports: [
    Events
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
