import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  searchText = "";
  
  @Output() searchChanged = new EventEmitter<string>();

  public searchItem() {
    console.log(this.searchText)
    this.searchChanged.emit(this.searchText);
  }
}
