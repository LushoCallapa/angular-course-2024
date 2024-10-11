import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[ngColors]',
  standalone: true
})
export class AppColorsDirective {

  @Input() ngColors!: string;
  @Input() defaultColor!: string;

  @Output() colorChange: EventEmitter<string> = new EventEmitter<string> ();
  @Output() colorDoubleCheck: EventEmitter<string> = new EventEmitter<string> ();

  @HostListener('click') onClick() {
    this.element.nativeElement.style.backgroundColor = this.ngColors;
    this.colorChange.emit('current color is: '+ this.ngColors);
  };
  @HostListener('dblclick') onDoubleClick() {
    this.element.nativeElement.style.backgroundColor = this.ngColors;
    this.colorDoubleCheck.emit('DBL current color is: '+ this.ngColors);
  };
  @HostListener('mouseleave') onBlur() {
    this.ngColors = this.defaultColor
  };

  constructor(private element: ElementRef) { 
    //this.element.nativeElement.setAttribute('tabindex', '0'); Este para que un div tenga el comportamiento focalizable
  }

}
