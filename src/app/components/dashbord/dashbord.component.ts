import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { ChartComponent } from '../../elements/chart/chart.component';
 
@Component({
  selector: 'app-dashbord',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CanvasJSAngularChartsModule,MatSidenavModule,
	  MatToolbarModule,
	  MatIconModule,
	  MatListModule,
	  MatButtonModule,
	  MatCardModule,
	ChartComponent],
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.scss',
})
export class DashbordComponent  implements OnInit{


  ngOnInit(): void {
  }
  salesCount = 1234; 
  registeredUsers = 567; 
  inventoryStatus = 85; 
 
}
