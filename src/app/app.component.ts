import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { data } from '../data/data';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';
interface Address {
  number: string;
  street: string;
  zone: string;
}

interface ItemData {
  name: string;
  lastName: string;
  type: string;
  subject?: string;
  address: Address;
  country: string;
  province: string;
  messages: string[];
  firstTestScore?: number;
  secondTestScore?: number;
  finalTestScore?: number;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  showCard: boolean = false; 
  selectedItem!: ItemData;
  state: string = "Personal";

  public onShow(item: ItemData) {
    this.selectedItem = item;
    this.showCard = true;
  }
  public changeState(newState: string) {
    this.state = newState;
  }
}
