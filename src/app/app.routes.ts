import { RouterModule, Routes } from '@angular/router';

//Componentes
import { LoginComponent } from 'src/app/login/login.component';
import { RegisterComponent } from 'src/app/register/register.component';
import { PagenotfoundComponent } from 'src/app/shared/pagenotfound/pagenotfound.component';

const appRoutes: Routes = [

    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: '**', component: PagenotfoundComponent }
]

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );