import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { socialNetworks, data } from './data'; 
import { CommonModule } from '@angular/common';
import { CardUserComponent } from './card-user/card-user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,CardUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  socialNetworks = socialNetworks;
  dataArray = Object.values(data);
  selectedTab = 'user';
  selectTab(tab: string) {
    this.selectedTab = tab;
  }
  addNewAction(platform: string, type: string) {
    console.log(`Add new ${type} for ${platform}`);
  }
}
