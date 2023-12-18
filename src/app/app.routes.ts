import { Routes } from '@angular/router';
import {PropertiesComponent} from "./properties/pages/properties/properties.component";
import {HomeComponent} from "./public/pages/home/home.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'management/properties', component: PropertiesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
