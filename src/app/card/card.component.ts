import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { SearchComponent } from '../search/search.component';
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
  selector: 'card',
  standalone: true,
  imports: [CommonModule, ItemComponent, SearchComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() state: string = "Personal";
  @Input() selectedItem!: ItemData;

  filteredMessages: string[] = [];

  ngOnInit() {
    this.filteredMessages = [...this.selectedItem.messages];
  }

  calculateAverage(): number {
    const scores = [
      this.selectedItem.firstTestScore,
      this.selectedItem.secondTestScore,
      this.selectedItem.finalTestScore
    ].filter(score => score !== undefined) as number[];

    if (scores.length === 0) return 0;
    return scores.reduce((a, b) => a + b, 0) / scores.length;
  }
  public onSearch(searchText: string) {
    console.log("data",searchText)
    this.filteredMessages = this.selectedItem.messages.filter(message =>
      message.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}
