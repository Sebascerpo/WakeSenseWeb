import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { AppMenuitemComponent } from './app.menuitem.component';
import { NgFor, NgIf } from '@angular/common';
import { LayoutService } from '../../layout/service/app.layout.service';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html',
  standalone: true,
  imports: [NgFor, NgIf, AppMenuitemComponent]
})
export class AppMenuComponent implements OnInit {

  model: any[] = [];

  constructor(public layoutService: LayoutService) { }

  ngOnInit() {
    this.model = ([
      {
        label: 'Panel Principal',
        items: [
          { label: 'Inicio', icon: 'pi pi-fw pi-home', routerLink: ['home'], }
        ]
      },
      {
        label: 'Reportes',
        items: [
          { label: 'Tendencia Calidad de Sueño', routerLink: ['tendencia-calidad-de-sueno'] },
          { label: 'Reporte Dia Anterior', routerLink: ['reporte-dia-anterior'] },
          { label: 'Objetivo de Sueño', routerLink: ['objetivo-de-sueno'] },
          { label: 'Reporte Sueño Acumulado', routerLink: ['reporte-sueno-acumulado'] },
        ]
      },
      {
        label: 'Personalización',
        items: [
          { label: 'Audio Personalizado'},
        ]
      },
      {
        label: 'Alarmas',
        items: [
          { label: 'Listado de Alarmas'},
        ]
      },


    ]);
  }


}
