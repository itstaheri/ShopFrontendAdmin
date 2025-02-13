import { Component, EventEmitter, Injectable, Output, Renderer2, viewChild, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { DeviceDetectorService } from 'ngx-device-detector';
import { MenuComponent } from '../../elements/menu/menu.component';
@Component({
  selector: 'app-main',
  standalone: true, 
  imports: [RouterOutlet,MenuComponent,
     MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatButtonModule,
        CommonModule
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
@Output() toggleSidebarEvent = new EventEmitter<string>();

  title = 'ShopProductFrontendAdmin';
 isMobile  = false;
  isTable = false;
  isDesktop = false;

 public menuStatus = 0
  constructor(private renderer: Renderer2,private deviceService: DeviceDetectorService){
    this.isMobile = deviceService.isMobile()
    this.isDesktop = deviceService.isDesktop()
    this.isTable = deviceService.isTablet()
  }
    @ViewChild('sidenav') sidenav!: MatSidenav;

    
    toggleSidenav() {
      this.sidenav.toggle(); 
    }
   
    chengeMenuStatus(number : number){
      
      if(number == this.menuStatus) this.menuStatus = 0
      else 
        this.menuStatus = number;
    }
}  
