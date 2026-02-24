import { Routes } from '@angular/router';
import { Home } from './components/home/home/home';
import { AboutUs } from './components/about-us/about-us/about-us';
import { BeMover } from './components/be-mover/be-mover/be-mover';
import { BePartner } from './components/be-partner/be-partner/be-partner';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'about-us', component: AboutUs},
    {path: 'be-mover', component: BeMover},
    {path: 'be-partner', component: BePartner},
    {path: '**', component: Home}
];
