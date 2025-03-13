import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RippleModule } from 'primeng/ripple';

import { RouterModule } from '@angular/router';

import { AppLayoutComponent } from "./app.layout.component";
import { AppTopBarComponent } from '../components/topbar/app.topbar.component';
import { AppFooterComponent } from '../components/footer/app.footer.component';
import { AppMenuComponent } from '../components/menu/app.menu.component';
import { AppSidebarComponent } from '../components/sidebar/app.sidebar.component';
import { AppMenuitemComponent } from '../components/menu/app.menuitem.component';

@NgModule({ exports: [AppLayoutComponent], imports: [FormsModule,
        InputTextModule,
        SidebarModule,
        BadgeModule,
        RadioButtonModule,
        InputSwitchModule,
        RippleModule,
        RouterModule,
        AppMenuitemComponent,
        AppTopBarComponent,
        AppFooterComponent,
        AppMenuComponent,
        AppSidebarComponent,
        AppLayoutComponent], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppLayoutModule { }
