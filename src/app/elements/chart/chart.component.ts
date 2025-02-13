import { Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, ChartData, ChartOptions } from 'chart.js/auto';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef;

  ngAfterViewInit() {
    const data: ChartData<'bar'> = {
      labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور'],
      datasets: [{
        label: 'میزان فروش',
        data: [12, 19, 3, 5, 2, 10],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    };

    const options: ChartOptions<'bar'> = {
      responsive: true,
      scales: {
        y: { beginAtZero: true }
      }
    };

    new Chart(this.chartCanvas.nativeElement, {
      type: 'bar',
      data,
      options
    });
  }
}
