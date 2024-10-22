import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { socialNetworks, data } from './data'; 
import { CommonModule } from '@angular/common';
import { CardUserComponent } from './card-user/card-user.component';
import { from } from 'rxjs';

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
  addNewAction(platform: string, type: string) {
    this.notifyUsers(platform, type);
  }
  private notifyUsers(platform: string, type: string) {
    const platformId = this.getPlatformId(platform);
    const usersToNotify = Object.values(data).filter(user => user.subscriptions.includes(platformId));

    const userObservable = from(usersToNotify);

    userObservable.subscribe(user => {
      const platformInfo = socialNetworks.find(net => net.id === platformId);
      if(platformInfo?.platformType === 'premium'){
        if (user.subscriptionType === 'premium' && user.amountAvailable >=5) {
          user.notifications.push(`${platform} added a new ${type}`);
          user.amountAvailable -= 5;
        } else {
        }
      }else{
        user.notifications.push(`${platform} added a new ${type}`);
      }
      
    });
  }

  private getPlatformId(platform: string): number {
    const platformData = socialNetworks.find(net => net.platform === platform);
    return platformData ? platformData.id : -1;
  }
}
