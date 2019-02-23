import { NgModule } from "@angular/core";

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
    declarations: [
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        FooterComponent,
        PagenotfoundComponent,
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        FooterComponent,
        PagenotfoundComponent
    ]
})

export class SharedModule { }