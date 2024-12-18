import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { DisplayComponent } from './display/display.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"form" , component: FormComponent},
    {path:"display" , component: DisplayComponent}
];
