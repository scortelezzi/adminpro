import { NgModule } from "@angular/core";

//Componentes
import { PagesComponent } from './pages.component';
import { DahsboardComponent } from './dahsboard/dahsboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';

//Modulos
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

//Rutas
import { PAGES_ROUTES } from './pages.routes';

//Temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';

import { ChartsModule } from 'ng2-charts';




@NgModule({
    declarations: [
        PagesComponent,
        DahsboardComponent,
        Graficas1Component,
        ProgressComponent,
        IncrementadorComponent,
        GraficoDonaComponent
    ],
    exports: [
        DahsboardComponent,
        Graficas1Component,
        ProgressComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ]
})

export class PagesModule { }