import { Component, EventEmitter, Output } from '@angular/core';
import { data } from '../../data/data';
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
  selector: 'list',
  standalone: true,
  imports: [ItemComponent, SearchComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  dataList = data;
  filteredDataList = data; 
  @Output() showItem = new EventEmitter<any>();
  public onSearch(searchText: string) {
    this.filteredDataList = this.dataList.filter(item => 
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.lastName.toLowerCase().includes(searchText.toLowerCase()) ||
      item.type.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  public onDelete(itemToDelete: any) {
    this.dataList = this.dataList.filter(item => item !== itemToDelete);
    this.filteredDataList = this.filteredDataList.filter(item => item !== itemToDelete);
  }
  
  public onShow(item: ItemData) {
    this.showItem.emit(item);
  }
}

