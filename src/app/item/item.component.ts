import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  @Input() city: any;
  @Output() deleteCityOutput : EventEmitter<any> = new EventEmitter<any>();
  deleteCity(){
    this.deleteCityOutput.emit(this.city);
  }
}
