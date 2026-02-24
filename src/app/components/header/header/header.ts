import { Component } from '@angular/core';
import { Navigation } from '../navigation/navigation';
import { AccounteHeader } from '../../account/accounte-header/accounte-header';

@Component({
  selector: 'app-header',
  imports: [
    Navigation,
    AccounteHeader
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

}
