import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReverseArrayPipe } from '../reverse-array.pipe';

@Component({
  selector: 'notification',
  standalone: true,
  imports: [CommonModule, ReverseArrayPipe],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent {
  @Input() notifications: any[] = [];
}
