import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  selector: 'item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  @Input() data!: ItemData; 

  @Output() deleteItem = new EventEmitter<void>();
  @Output() showItem = new EventEmitter<ItemData>();

  public onDelete() {
    this.deleteItem.emit();
  }

  public onShow() {
    this.showItem.emit(this.data);
  }
}
