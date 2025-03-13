import { ChangeDetectionStrategy, Component, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-reporte-dia-anterior',
  standalone: true,
  imports: [],
  templateUrl: './reporte-dia-anterior.component.html',
  styleUrl: './reporte-dia-anterior.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReporteDiaAnteriorComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart() {
    const ctx = document.getElementById('reporteDiaChart') as HTMLCanvasElement;
    
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00'],
        datasets: [{
          label: 'Calidad de Sueño',
          data: [8, 5, 6, 3, 7, 9, 8],
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
              text: 'Horas del Día',
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