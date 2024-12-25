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
 
@Component({
  selector: 'app-dashbord',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CanvasJSAngularChartsModule,MatSidenavModule,
	  MatToolbarModule,
	  MatIconModule,
	  MatListModule,
	  MatButtonModule,
	  MatCardModule],
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.scss'
})
export class DashbordComponent  implements OnInit{

  ngOnInit(): void {
  }
  salesCount = 1234; 
  registeredUsers = 567; 
  inventoryStatus = 85; 
  chartOptions = {
		title: {
			text: "فروش"
		},
		animationEnabled: true,
		axisY: {
			includeZero: true
		},
		data: [{
			type: "column", //change type to bar, line, area, pie, etc
			//indexLabel: "{y}", //Shows y value on all Data Points
			indexLabelFontColor: "#5A5757",
			dataPoints: [
				{ x: 10, y: 71 },
				{ x: 20, y: 55 },
				{ x: 30, y: 50 },
				{ x: 40, y: 65 },
				{ x: 50, y: 71 },
				{ x: 60, y: 92, indexLabel: "Highest\u2191" },
				{ x: 70, y: 68 },
				{ x: 80, y: 38, indexLabel: "Lowest\u2193"  },
				{ x: 90, y: 54 },
				{ x: 100, y: 60 }
			]
		}]
	}
}
