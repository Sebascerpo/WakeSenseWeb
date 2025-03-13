import { ChangeDetectionStrategy, Component, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-tendencia-calidad-de-sueno',
  standalone: true,
  imports: [],
  templateUrl: './tendencia-calidad-de-sueno.component.html',
  styleUrl: './tendencia-calidad-de-sueno.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TendenciaCalidadDeSuenoComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart() {
    const ctx = document.getElementById('calidadSuenoChart') as HTMLCanvasElement;
    
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Día 1', 'Día 2', 'Día 3', 'Día 4', 'Día 5', 'Día 6', 'Día 7'], 
        datasets: [{
          label: 'Calidad de Sueño',
          data: [7, 8, 6, 9, 5, 8, 7], 
          borderColor: '#7862F8',
          backgroundColor: 'rgba(120, 98, 248, 0.2)',
          borderWidth: 2,
          pointRadius: 5,
          pointBackgroundColor: '#C8F560',
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Días del Mes',
              font: { size: 16, weight: 'bold' }
            }
          },
          y: {
            title: {
              display: true,
              text: 'Calidad de Sueño',
              font: { size: 16, weight: 'bold' }
            },
            min: 1,
            max: 10,
            ticks: {
              stepSize: 1
            }
          }
        }
      }
    });
  }
}