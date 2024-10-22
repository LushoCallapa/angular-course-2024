import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { socialNetworks } from '../data';

@Component({
  selector: 'user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input() user: any;
  socialNetworks = socialNetworks
  availableNetworks :any[] = [];

  ngOnInit() {
    this.updateAvailableNetworks();
  }


  selectSubscription(type: string) {
    this.user.subscriptionType = type;
  }
  getNetworkById(id: number) {
    return this.socialNetworks.find(network => network.id === id);
  }
  updateAvailableNetworks() {
    this.availableNetworks = this.socialNetworks.filter(network => 
      !this.user.subscriptions.includes(network.id)
    );
  }

  subscribe(id: number) {
    this.user.subscriptions.push(id);
    this.updateAvailableNetworks();
  }

  unsubscribe(id: number) {
    this.user.subscriptions = this.user.subscriptions.filter((sub:number) => sub !== id);
    this.updateAvailableNetworks();
  }
}
