import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  searchText = "";
  
  @Output() searchChanged = new EventEmitter<string>();

  public searchItem() {
    console.log(this.searchText)
    this.searchChanged.emit(this.searchText);
  }
}
