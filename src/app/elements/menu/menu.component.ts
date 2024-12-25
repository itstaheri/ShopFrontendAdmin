import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { DeviceDetectorService } from 'ngx-device-detector';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatIconModule,CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})

export class MenuComponent implements OnInit {


  isMobile  = false;
  isTablet = false;
  isDesktop = false;
  constructor(private deviceService: DeviceDetectorService,private appComponent : AppComponent){
    this.isMobile = deviceService.isMobile()
    this.isDesktop = deviceService.isDesktop()
    this.isTablet = deviceService.isTablet()
  

  }
ngOnInit(): void {
  this.DateTime = (new Date).toLocaleDateString('fa-Ir');
}
DateTime! : String

toggleSidebar(){
this.appComponent.toggleSidenav()

}
}
