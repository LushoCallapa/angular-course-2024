import { Component, Input } from '@angular/core';
import { NotificationComponent } from '../notification/notification.component';
import { UserComponent } from '../user/user.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'card-user',
  standalone: true,
  imports: [NotificationComponent,UserComponent,CommonModule],
  templateUrl: './card-user.component.html',
  styleUrl: './card-user.component.scss'
})
export class CardUserComponent {
  @Input() user: any;
  selectedTab = 'user';
  
  selectTab(tab: string) {
    this.selectedTab = tab;
  }
}
