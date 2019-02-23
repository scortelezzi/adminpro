import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from 'src/app/pages/pages.component';

import { DahsboardComponent } from 'src/app/pages/dahsboard/dahsboard.component';
import { LoginComponent } from 'src/app/login/login.component';
import { ProgressComponent } from 'src/app/pages/progress/progress.component';
import { Graficas1Component } from 'src/app/pages/graficas1/graficas1.component';
import { RegisterComponent } from 'src/app/register/register.component';
import { PagenotfoundComponent } from 'src/app/shared/pagenotfound/pagenotfound.component';


const appRoutes: Routes = [
    { path: '', 
      component: PagesComponent,
      children: [
        { path: 'dashboard', component: DahsboardComponent},      
        { path: 'progress', component: ProgressComponent},
        { path: 'graficas1', component: Graficas1Component},
        { path: '', redirectTo: './dashboard', pathMatch: 'full' }
      ],
    },
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: '**', component: PagenotfoundComponent }
]

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );