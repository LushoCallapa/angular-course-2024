import { afterNextRender, afterRender, Component } from '@angular/core';

@Component({
  selector: 'counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  sum: number = 0;

  constructor(){
    afterRender(()=>{
      console.log('AfterRender', this.sum)
    })
    afterNextRender(()=>{
      console.log('AfterNEXT Render', this.sum)
    })
  }
}
