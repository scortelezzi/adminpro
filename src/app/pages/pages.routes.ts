import { RouterModule, Routes } from "@angular/router";

//Componentes
import { PagesComponent } from './pages.component';
import { DahsboardComponent } from './dahsboard/dahsboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const pagesRoutes: Routes = [
    { path: '', 
      component: PagesComponent,
      children: [
        { path: 'dashboard', component: DahsboardComponent, data: { titulo: 'Dashboard', descripcion: 'Pagina Dashboard del AdminPro' }},      
        { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress', descripcion: 'Pagina Progress del AdminPro' }},
        { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Graficos', descripcion: 'Pagina Graficos del AdminPro' }},
        { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas', descripcion: 'Pagina Promesas del AdminPro' }},
        { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJS', descripcion: 'Pagina RxJS del AdminPro' }},
        { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes del tema', descripcion: 'Pagina Ajustes del tema del AdminPro' }},
        { path: '', redirectTo: './dashboard', pathMatch: 'full' }
      ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );