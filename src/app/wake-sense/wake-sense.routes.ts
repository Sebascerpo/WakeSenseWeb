import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { HomeComponent } from './pages/panel-principal/home/home.component';
import { TendenciaCalidadDeSuenoComponent } from './pages/reportes/tendencia-calidad-de-sueno/tendencia-calidad-de-sueno.component';
import { ObjetivoDeSuenoComponent } from './pages/reportes/objetivo-de-sueno/objetivo-de-sueno.component';
import { ReporteDiaAnteriorComponent } from './pages/reportes/reporte-dia-anterior/reporte-dia-anterior.component';
import { ReporteSuenoAcumuladoComponent } from './pages/reportes/reporte-sueno-acumulado/reporte-sueno-acumulado.component';



const wakeSenseRoutes: Routes = [
    {
        path: '',
        component: AppLayoutComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent,
            },
            {
                path: 'tendencia-calidad-de-sueno',
                component: TendenciaCalidadDeSuenoComponent,
            },
            {
                path: 'reporte-dia-anterior',
                component: ReporteDiaAnteriorComponent,
            },
            {
                path: 'objetivo-de-sueno',
                component: ObjetivoDeSuenoComponent,
            },
            {
                path: 'reporte-sueno-acumulado',
                component: ReporteSuenoAcumuladoComponent,
            },
            { path: '**', redirectTo: 'home', pathMatch: 'full' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(wakeSenseRoutes)],
    exports: [RouterModule]
})
export class WakeSenseRoutes { }
